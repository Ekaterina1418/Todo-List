import React from 'react'
import ReactDOM from 'react-dom/client'
import './i18next'
import { App } from './views/App/App'
import { RootStoreContext } from './data/root-store-context'
import RootStore from './data/root-store'
import './views/styles/reset.scss'
import './views/styles/common.scss'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RootStoreContext.Provider value={new RootStore()}>
      <App />
    </RootStoreContext.Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
