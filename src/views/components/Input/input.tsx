import React, { useCallback, useState } from 'react'
import styles from './input.module.scss'
import { on } from 'stream'
interface InputProps {
  onAdd: (text: string) => void
}

export const Input: React.FC<InputProps> = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('')
  const addTask = useCallback(() => {
    if (inputValue === '') {
      return onAdd('пустая задача')
    }
    onAdd(inputValue)
    setInputValue('')
  }, [inputValue])

  return (
    <div className={styles.input}>
      <input
        type="text"
        className={styles.inputValue}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTask()
          }
        }}
        placeholder="Type here..."
      />
      <button
        onClick={addTask}
        aria-label="Add"
        className={styles.inputButton}
      />
    </div>
  )
}
