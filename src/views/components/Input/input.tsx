import React, { useCallback, useState } from 'react'
import styles from './input.module.scss'
import { useTranslation } from 'react-i18next'
interface InputProps {
  onAdd: (text: string) => void
}

export const Input: React.FC<InputProps> = ({ onAdd }) => {
  const { t } = useTranslation()
  const [inputValue, setInputValue] = useState('')

  const addTask = useCallback(() => {
    onAdd(inputValue)
    setInputValue('')
  }, [inputValue, onAdd])

  const handleAddClick = () => {
    if (inputValue.trim() !== '') {
      onAdd(inputValue)
      setInputValue('')
    }
  }

  return (
    <div className={styles.input}>
      <input
        type="text"
        placeholder={t('app.addTaskPlaceholder')}
        className={styles.inputValue}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTask()
          }
        }}
      />
      <button
        onClick={handleAddClick}
        aria-label="Add"
        className={styles.inputButton}
      />
    </div>
  )
}
