import { combineReducers } from 'redux';
import { tasksReducer } from './tasksReducer';

export const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
