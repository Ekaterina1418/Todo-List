import React from 'react'
import styles from './index.module.scss'

import { observer } from 'mobx-react-lite'
import { useStores } from '../../data/root-store-context'
import { Input } from '../components/Input/input'

export const App: React.FC = observer(() => {
  const {
    tasks: { tasks, addTask },
  } = useStores()

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
        <section className={styles.articleSection}></section>
      </article>
    </div>
  )
})
