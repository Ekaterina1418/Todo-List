import { makeAutoObservable } from 'mobx'
import { v4 as uuidv4 } from 'uuid'
import { ITask, FilterStatus } from '../../types/types'

// Массив задач
class TasksStore {
  tasks = [
    { id: uuidv4(), text: 'todo 1', isDone: true },
    { id: uuidv4(), text: 'todo 2', isDone: false },
    { id: uuidv4(), text: 'todo 3', isDone: false },
  ]

  // Статус фильтрации (по умолчанию - все)
  filterStatus: 'all' | 'completed' | 'uncompleted' = 'all'

  constructor() {
    // Наблюдаемые свойства
    makeAutoObservable(this)
  }

  // Метод добавления задачи
  addTask = (text: string) => {
    this.tasks.push({
      id: uuidv4(),
      text,
      isDone: false,
    })
  }
  // Метод редактирования
  editedTask = (id: string, text: string) => {
    const taskToUpdate = this.tasks.find((task) => task.id === id)
    if (taskToUpdate) {
      taskToUpdate.text = text
    }
  }
  // Метод удвления задачи
  removedTask = (id: string) => {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }
  // Метод отметки выполнена/ не выполнена
  markDone = (id: string) => {
    const task = this.tasks.find((t) => t.id === id)
    if (task) {
      task.isDone = !task.isDone

      // При изменении статуса задачи, обновляем фильтрацию
      if (task.isDone) {
        this.filterStatus = 'completed'
      } else {
        this.filterStatus = 'uncompleted'
      }
    } else {
      console.error(`Task with id ${id} not found.`)
    }
  }
  // Метод установки статуса фильтрации
  statusTask = (status: FilterStatus) => {
    this.filterStatus = status
  }

  // Геттер для получения отфильтрованных задач
  get filteredTasks(): ITask[] {
    if (this.filterStatus === 'all') {
      return this.tasks
    } else if (this.filterStatus === 'completed') {
      return this.tasks.filter((task) => task.isDone)
    } else {
      return this.tasks.filter((task) => !task.isDone)
    }
  }
}

const taskStore = new TasksStore()
export default taskStore
