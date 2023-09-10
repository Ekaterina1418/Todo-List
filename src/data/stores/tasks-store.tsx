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
}

export default new TasksStore()
