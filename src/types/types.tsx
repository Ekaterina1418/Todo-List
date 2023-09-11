export interface ITask {
  id: string
  text: string
  isDone: boolean
}

export enum FilterStatus {
  All = 'all',
  Completed = 'completed',
  Uncompleted = 'uncompleted',
}
