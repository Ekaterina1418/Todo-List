import React, { useState, useRef, useEffect } from 'react'
import styles from './index.module.scss'

interface TaskProps {
  id: string
  text: string
  onDone: () => void
  onRemoved: (id: string) => void
  onEdited: (id: string, text: string) => void
}

export const TaskList: React.FC<TaskProps> = ({
  id,
  text,
  onDone,
  onRemoved,
  onEdited,
}) => {
  const [checked, setChecked] = useState(false)
  const [isEditMode, setEditMode] = useState(false)
  const [value, setValue] = useState(text)
  const editTextRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isEditMode) {
      editTextRef?.current?.focus()
    }
  }, [isEditMode])

  return (
    <div className={styles.task}>
      <label className={styles.taskLabel}>
        <input
          type="checkbox"
          disabled={isEditMode}
          checked={checked}
          className={styles.taskCheckbox}
          onChange={(e) => {
            setChecked(e.target.checked)
            if (e.target.checked) {
              onDone()
            }
          }}
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
          <h3 className={styles.taskText}>{text}</h3>
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