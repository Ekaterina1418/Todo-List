import { createContext, useContext } from 'react'
import RootStore from './root-store'

// Создание контекста для хранения экземпляра RootStore
export const RootStoreContext = createContext<RootStore | null>(null)

// Кастомный хук useStores для получения доступа к RootStore из контекста
export const useStores = () => {
  // Используем useContext для получения значения из контекста
  const context = useContext(RootStoreContext)

  // Если контекст не был предоставлен, выбрасываем ошибку
  if (context === null) {
    throw new Error(
      'RootStoreContext не был предоставлен. Убедитесь, что компонент App находится внутри провайдера RootStoreContext.'
    )
  }

  return context
}
