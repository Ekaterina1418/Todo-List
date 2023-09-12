import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './index.module.scss'
export const Header = () => {
  const { i18n } = useTranslation()
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }
  return (
    <header className={styles.header}>
      <button
        className={styles.headerButton}
        onClick={() => changeLanguage('ru')}
      >
        Русский
      </button>
      <button
        className={styles.headerButton}
        onClick={() => changeLanguage('en')}
      >
        English
      </button>
    </header>
  )
}
