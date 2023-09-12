import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './index.module.scss'
import { FilterStatus } from '../../../types/types'

interface FilterProps {
  handleFilterChange: (status: FilterStatus) => void
}

export const TaskFilter: React.FC<FilterProps> = ({ handleFilterChange }) => {
  const { t } = useTranslation()
  return (
    <div className={styles.button}>
      <button
        className={styles.buttonFilter}
        onClick={() => handleFilterChange(FilterStatus.All)}
      >
        {t('app.all')}
      </button>
      <button
        className={styles.buttonFilter}
        onClick={() => handleFilterChange(FilterStatus.Completed)}
      >
        {t('app.completed')}
      </button>
      <button
        className={styles.buttonFilter}
        onClick={() => handleFilterChange(FilterStatus.Uncompleted)}
      >
        {t('app.uncompleted')}
      </button>
    </div>
  )
}
