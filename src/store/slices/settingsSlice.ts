import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SettingsState } from '../../types';

const initialState: SettingsState = {
  taskTime: 0.2,
  breakTime: 0.1,
  longBreakTime: 0.15,
  longBreakFrequency: 3,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeTaskTime: (state, action: PayloadAction<number>) => {
      state.taskTime = action.payload;
    },
    changeBreakTime: (state, action: PayloadAction<number>) => {
      state.breakTime = action.payload;
    },
    changeLongBreak: (state, action: PayloadAction<number>) => {
      state.longBreakTime = action.payload;
    },
    changeLongBreakFrequency: (state, action: PayloadAction<number>) => {
      state.longBreakFrequency = action.payload;
    },
  },
});

export const { changeTaskTime, changeBreakTime, changeLongBreak, changeLongBreakFrequency } =
  settingsSlice.actions;

export default settingsSlice.reducer;
