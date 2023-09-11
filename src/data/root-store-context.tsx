import { createContext, useContext } from 'react'
import RootStore from './root-store'

export const RootStoreContext = createContext<RootStore | null>(null)

export const useStores = () => {
  const context = useContext(RootStoreContext)

  if (context === null) {
    throw new Error(
      'RootStoreContext не был предоставлен. Убедитесь, что компонент App находится внутри провайдера RootStoreContext.'
    )
  }

  return context
}
