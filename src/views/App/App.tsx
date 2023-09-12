import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './index.module.scss'
import { observer } from 'mobx-react-lite'
import { useStores } from '../../data/root-store-context'
import { FilterStatus } from '../../types/types'
import { Input } from '../components/Input/input'
import { TaskList } from '../components/TaskList/tasks'
import { TaskFilter } from '../components/TaskFilter/taskfilter'
import { Header } from '../components/Header/header'

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

  const { t } = useTranslation()

  const handleFilterChange = (status: FilterStatus) => {
    statusTask(status)
  }

  return (
    <div className={styles.container}>
      <Header />
      <article className={styles.article}>
        <h1 className={styles.articleTitle}>{t('app.title')}</h1>
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
          {!tasks.length && (
            <p className={styles.articleText}>{t('app.noTasks')}</p>
          )}
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
