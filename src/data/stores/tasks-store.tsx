import { makeAutoObservable } from 'mobx'
import { v4 as uuidv4 } from 'uuid'
import { ITask, FilterStatus } from '../../types/types'

class TasksStore {
  tasks = [
    { id: uuidv4(), text: 'todo 1', isDone: true },
    { id: uuidv4(), text: 'todo 2', isDone: false },
    { id: uuidv4(), text: 'todo 3', isDone: false },
  ]

  filterStatus: 'all' | 'completed' | 'uncompleted' = 'all'

  constructor() {
    makeAutoObservable(this)
  }

  //Методы добавления, удаления и редактирования задач

  addTask = (text: string) => {
    this.tasks.push({
      id: uuidv4(),
      text,
      isDone: false,
    })
  }
  editedTask = (id: string, text: string) => {
    const taskToUpdate = this.tasks.find((task) => task.id === id)
    if (taskToUpdate) {
      taskToUpdate.text = text
    }
  }
  removedTask = (id: string) => {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }
  markDone = (id: string) => {
    const task = this.tasks.find((t) => t.id === id)
    if (task) {
      task.isDone = !task.isDone
      if (task.isDone) {
        this.filterStatus = 'completed'
      } else {
        this.filterStatus = 'uncompleted'
      }
    } else {
      console.error(`Task with id ${id} not found.`)
    }
  }
  statusTask = (status: FilterStatus) => {
    this.filterStatus = status
  }

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
