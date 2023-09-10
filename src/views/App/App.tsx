import React from 'react'
import styles from './index.module.scss'

import { observer } from 'mobx-react-lite'
import { useStores } from '../../data/root-store-context'
import { Input } from '../components/Input/input'
import { TaskList } from '../components/TaskList/task'

export const App: React.FC = observer(() => {
  const {
    tasks: { tasks, addTask, removedTask, editedTask, statusTask },
  } = useStores()
  const handleToggleIsDone = (id: string) => {
    const task = tasks.find((task) => task.id === id)
    if (task) {
      statusTask()
    }
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
          {!tasks.length && <p className={styles.articleText}>Задач нет</p>}
          {tasks.map((task) => (
            <TaskList
              key={task.id}
              id={task.id}
              text={task.text}
              onDone={() => handleToggleIsDone(task.id)}
              onRemoved={removedTask}
              onEdited={editedTask}
            />
          ))}
        </section>
      </article>
    </div>
  )
})
