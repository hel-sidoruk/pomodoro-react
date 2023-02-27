import { TasksAction, TasksActionTypes, TasksState } from '../../types/task';

const initialState: TasksState = {
  tasks: [],
};

export const tasksReducer = (state = initialState, action: TasksAction) => {
  switch (action.type) {
    case TasksActionTypes.ADD_TASK:
      return { ...state, tasks: action.payload.tasks };
    case TasksActionTypes.DELETE_TASK:
      return { ...state, tasks: action.payload.tasks };
    default:
      return state;
  }
};
