import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { StatsState } from '../../types';

const initialState: StatsState = {
  workTime: 0,
  pauseTime: 0,
  stops: 0,
};

export const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    addWorkTime: (state, action: PayloadAction<number>) => {
      state.workTime += action.payload;
    },
    addPauseTime: (state, action: PayloadAction<number>) => {
      state.pauseTime += action.payload;
    },
    addStop: (state) => {
      state.stops += 1;
    },
  },
});

export const { addWorkTime, addPauseTime, addStop } = statsSlice.actions;

export default statsSlice.reducer;
