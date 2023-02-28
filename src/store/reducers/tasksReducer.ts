import { TasksAction, TasksActionTypes, TasksState } from '../../types/task';

const initialState: TasksState = {
  tasks: [],
};

export const tasksReducer = (state = initialState, action: TasksAction) => {
  switch (action.type) {
    case TasksActionTypes.UPDATE_TASKS:
      return { ...state, tasks: action.payload.tasks };
    default:
      return state;
  }
};
