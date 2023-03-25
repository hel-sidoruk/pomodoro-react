import { combineReducers } from 'redux';
import { pomodoroReducer } from './pomodoroReducer';
import { tasksReducer } from './tasksReducer';

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  pomodoro: pomodoroReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
