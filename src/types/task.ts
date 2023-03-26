export interface ITask {
  id: string;
  text: string;
  count: number;
  done: boolean;
}
export interface TasksState {
  tasks: ITask[];
}
export enum TasksActionTypes {
  UPDATE_TASKS = 'UPDATE_TASKS',
}
export interface TasksAction {
  type: TasksActionTypes.UPDATE_TASKS;
  payload: { tasks: ITask[] };
}
