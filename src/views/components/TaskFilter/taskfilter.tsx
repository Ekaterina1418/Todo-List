import React from 'react'
import { FilterStatus } from '../../../types/types'

interface FilterProps {
  handleFilterChange: (status: FilterStatus) => void
}

export const TaskFilter: React.FC<FilterProps> = ({ handleFilterChange }) => {
  return (
    <div>
      <button onClick={() => handleFilterChange(FilterStatus.All)}>All</button>
      <button onClick={() => handleFilterChange(FilterStatus.Completed)}>
        Completed
      </button>
      <button onClick={() => handleFilterChange(FilterStatus.Uncompleted)}>
        Uncompleted
      </button>
    </div>
  )
}
