export interface ITask {
  id: string;
  text: string;
  count: number;
}
export interface TasksState {
  tasks: ITask[];
}
export enum TasksActionTypes {
  ADD_TASK = 'ADD_TASK',
  DELETE_TASK = 'DELETE_TASK',
}
interface AddTask {
  type: TasksActionTypes.ADD_TASK;
  payload: { tasks: ITask[] };
}
interface DeleteTask {
  type: TasksActionTypes.DELETE_TASK;
  payload: { tasks: ITask[] };
}
export type TasksAction = AddTask | DeleteTask;
