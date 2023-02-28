import { Dispatch } from 'react';
import { ThunkActionType } from '../../types';
import { ITask, TasksAction, TasksActionTypes } from '../../types/task';

export function addTask(task: ITask): ThunkActionType {
  return async (dispatch: Dispatch<TasksAction>, getState) => {
    const { tasks } = getState().tasks;
    dispatch({ type: TasksActionTypes.ADD_TASK, payload: { tasks: [...tasks, task] } });
  };
}

export function deleteTask(id: string): ThunkActionType {
  return async (dispatch: Dispatch<TasksAction>, getState) => {
    const { tasks } = getState().tasks;
    const filteredTasks = tasks.filter((el) => el.id !== id);
    dispatch({ type: TasksActionTypes.DELETE_TASK, payload: { tasks: filteredTasks } });
  };
}

export function editTaskTime(id: string, time: number): ThunkActionType {
  return async (dispatch: Dispatch<TasksAction>, getState) => {
    const { tasks } = getState().tasks;
    const task = tasks.find((el) => el.id === id);
    if (task) task.count = time;
    dispatch({ type: TasksActionTypes.DELETE_TASK, payload: { tasks } });
  };
}
