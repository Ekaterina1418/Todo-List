import React, { useCallback, useState } from 'react'
import styles from './input.module.scss'
import { useTranslation } from 'react-i18next'
interface InputProps {
  onAdd: (text: string) => void
}

export const Input: React.FC<InputProps> = ({ onAdd }) => {
  const { t } = useTranslation() // Инициализация хука для локализации
  const [inputValue, setInputValue] = useState('') // Используем хук состояния для отслеживания значения ввода

  // Callback-функция для добавления задачи. Использовние этого хука позволит создать функцию addTask один раз при первом рендере и пересоздаваться только при изменении зависимостей.
  const addTask = useCallback(() => {
    onAdd(inputValue) // Вызываем функцию onAdd и передаем ей текст задачи
    setInputValue('') // Очищаем значение ввода после добавления задачи
  }, [inputValue, onAdd]) // Зависимости включают значение ввода и функцию onAdd

  // Обработчик клика на кнопке "Добавить"
  const handleAddClick = () => {
    if (inputValue.trim() !== '') {
      onAdd(inputValue) // Если текст задачи не пустой, вызываем функцию onAdd
      setInputValue('') // Очищаем значение ввода
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
