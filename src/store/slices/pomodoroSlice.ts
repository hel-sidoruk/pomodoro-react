import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PomodoroState } from '../../types';

const initialState: PomodoroState = {
  isTaskTime: true,
  isInProcess: false,
  pomodoros: 1,
  breaks: 0,
};

export const pomodoroSlice = createSlice({
  name: 'pomodoro',
  initialState,
  reducers: {
    switchTaskTime: (state) => {
      state.isTaskTime = !state.isTaskTime;
    },
    switchProcess: (state, action: PayloadAction<boolean>) => {
      state.isInProcess = action.payload;
    },
    addPomodoro: (state) => {
      state.pomodoros += 1;
    },
    addBreak: (state) => {
      state.breaks += 1;
    },
  },
});

export const { switchTaskTime, switchProcess, addPomodoro, addBreak } = pomodoroSlice.actions;

export default pomodoroSlice.reducer;
