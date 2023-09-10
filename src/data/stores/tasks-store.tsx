import { makeAutoObservable } from 'mobx'
import { v4 as uuidv4 } from 'uuid'

export interface ITask {
  id: string
  text: string
  isDone: boolean
}

class TasksStore {
  tasks = [
    { id: uuidv4(), text: 'todo 1', isDone: true },
    { id: uuidv4(), text: 'todo 2', isDone: false },
    { id: uuidv4(), text: 'todo 3', isDone: false },
  ]

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
  statusTask = () => {
    this.tasks.forEach((task) => {
      task.isDone = !task.isDone
    })
  }
}

export default new TasksStore()
