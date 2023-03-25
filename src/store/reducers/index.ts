import { combineReducers } from 'redux';
import { pomodoroReducer } from './pomodoroReducer';
import { settingsReducer } from './settingsReducer';
import { tasksReducer } from './tasksReducer';

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  pomodoro: pomodoroReducer,
  settings: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
