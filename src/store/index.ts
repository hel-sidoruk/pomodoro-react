import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import tasksReducer from './slices/tasksSlice';
import statsReducer from './slices/statsSlice';
import settingsReducer from './slices/settingsSlice';
import pomodoroReducer from './slices/pomodoroSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    stats: statsReducer,
    settings: settingsReducer,
    pomodoro: pomodoroReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
