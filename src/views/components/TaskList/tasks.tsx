import React, { useState, useRef, useEffect } from 'react'
import styles from './index.module.scss'

interface TaskProps {
  isDone: boolean
  id: string
  text: string
  onDone: (id: string) => void
  onRemoved: (id: string) => void
  onEdited: (id: string, text: string) => void
}

export const TaskList: React.FC<TaskProps> = ({
  isDone,
  id,
  text,
  onDone,
  onRemoved,
  onEdited,
}) => {
  // Состояние для  редактирования задачи
  const [isEditMode, setEditMode] = useState(false)

  // Состояние для текста задачи редактирования
  const [value, setValue] = useState(text)

  // Состояние для отметки выполнения задачи

  // Реф для поля ввода в режиме редактирования
  const editTextRef = useRef<HTMLInputElement>(null)

  // Фокусировка на поле ввода при переходе в режим редактирования
  useEffect(() => {
    if (isEditMode) {
      editTextRef?.current?.focus()
    }
  }, [isEditMode])

  const handleToggle = () => {
    onDone(id)
  }

  return (
    <div className={styles.task}>
      <label className={styles.taskLabel}>
        <input
          type="checkbox"
          disabled={isEditMode}
          checked={isDone}
          onChange={handleToggle}
          className={styles.taskCheckbox}
        />
        {isEditMode ? (
          <input
            value={value}
            ref={editTextRef}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onEdited(id, value)
                setEditMode(false)
              }
            }}
            className={styles.taskInputEdit}
          />
        ) : (
          <h3
            className={`${
              isDone === true ? styles.taskTextCompleted : styles.taskText
            }`}
          >
            {text}
          </h3>
        )}
      </label>
      {isEditMode ? (
        <button
          aria-label="Save"
          className={styles.taskSave}
          onClick={() => {
            onEdited(id, value)
            setEditMode(false)
          }}
        />
      ) : (
        <button
          aria-label="Edit"
          className={styles.taskEdit}
          onClick={() => {
            setEditMode(true)
          }}
        />
      )}
      <button
        aria-label="Remove"
        className={styles.taskRemoved}
        onClick={() => onRemoved(id)}
      />
    </div>
  )
}
