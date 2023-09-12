import TasksStore from './stores/tasks-store'

// Определение класса RootStore
class RootStore {
  // Создание свойства tasks и инициализация его значением из TasksStore
  tasks = TasksStore
}
export default RootStore
