import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './index.module.scss'
import { FilterStatus } from '../../../types/types'

interface FilterProps {
  handleFilterChange: (status: FilterStatus) => void
}

export const TaskFilter: React.FC<FilterProps> = ({ handleFilterChange }) => {
  // Обернем функцию handleFilterChange в useCallback
  const handleFilterChangeCallback = useCallback(
    (status: FilterStatus) => {
      handleFilterChange(status)
    },
    [handleFilterChange]
  )
  const { t } = useTranslation() // Инициализиция хука для локализации
  return (
    <div className={styles.button}>
      <button
        className={styles.buttonFilter}
        onClick={() => handleFilterChangeCallback(FilterStatus.All)}
      >
        {t('app.all')}
      </button>
      <button
        className={styles.buttonFilter}
        onClick={() => handleFilterChangeCallback(FilterStatus.Completed)}
      >
        {t('app.completed')}
      </button>
      <button
        className={styles.buttonFilter}
        onClick={() => handleFilterChangeCallback(FilterStatus.Uncompleted)}
      >
        {t('app.uncompleted')}
      </button>
    </div>
  )
}
