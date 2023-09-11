import React from 'react'
import styles from './index.module.scss'
import { observer } from 'mobx-react-lite'
import { useStores } from '../../data/root-store-context'
import { FilterStatus } from '../../types/types'
import { Input } from '../components/Input/input'
import { TaskList } from '../components/TaskList/tasks'
import { TaskFilter } from '../components/TaskFilter/taskfilter'

export const App: React.FC = observer(() => {
  const {
    tasks: {
      tasks,
      addTask,
      removedTask,
      editedTask,
      markDone,
      filteredTasks,
      statusTask,
    },
  } = useStores()

  const handleFilterChange = (status: FilterStatus) => {
    statusTask(status)
  }

  return (
    <div className="App">
      <article className={styles.article}>
        <h1 className={styles.articleTitle}>To Do App</h1>
        <section className={styles.articleSection}>
          <Input
            onAdd={(text) => {
              if (text) {
                addTask(text)
              }
            }}
          />
        </section>
        <section className={styles.articleSection}>
          <div>
            <TaskFilter handleFilterChange={handleFilterChange} />
          </div>
          {!tasks.length && <p className={styles.articleText}>Задач нет</p>}
          {filteredTasks.map((task) => (
            <TaskList
              key={task.id}
              isDone={task.isDone}
              id={task.id}
              text={task.text}
              onDone={markDone}
              onRemoved={removedTask}
              onEdited={editedTask}
            />
          ))}
        </section>
      </article>
    </div>
  )
})
