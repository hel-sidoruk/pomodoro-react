import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IWorkStats, StatsState } from '../../types';
import { getDayFromNow } from '../../utils/getDaysArray';
import { localStorageKey } from '../../utils/constants';

const initialState: StatsState = {
  workTime: 0,
  pauseTime: 0,
  stops: 0,
  weeksAgo: 0,
  workTimeStats: [],
};

export const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    addWorkTime: (state, action: PayloadAction<number>) => {
      const workStatsItem = state.workTimeStats.find(
        (el) => el.date === getDayFromNow(0).getTime()
      );
      if (workStatsItem) {
        workStatsItem.workTime = state.workTime + action.payload;
      }
      localStorage.setItem(localStorageKey, JSON.stringify(state.workTimeStats));
      state.workTime += action.payload;
    },
    addPauseTime: (state, action: PayloadAction<number>) => {
      state.pauseTime += action.payload;
    },
    addStop: (state) => {
      state.stops += 1;
    },
    changePeriod: (state, action: PayloadAction<number>) => {
      state.weeksAgo = action.payload;
    },
    restoreStats: (state, action: PayloadAction<IWorkStats>) => {
      state.workTimeStats = action.payload;
    },
    resetStats: (state) => {
      state.workTime = 0;
      state.pauseTime = 0;
      state.stops = 0;
    },
  },
});

export const { addWorkTime, addPauseTime, addStop, changePeriod, restoreStats, resetStats } =
  statsSlice.actions;

export default statsSlice.reducer;
