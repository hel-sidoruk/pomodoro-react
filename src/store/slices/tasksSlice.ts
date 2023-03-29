import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ITask, TasksState } from '../../types';

const initialState: TasksState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks = [...state.tasks, action.payload];
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((el) => el.id !== action.payload);
    },
    editTaskTime: (state, action: PayloadAction<{ id: string; time: number }>) => {
      const task = state.tasks.find((el) => el.id === action.payload.id);
      if (task) {
        task.count = action.payload.time;
      }
    },
    updateTaskText: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const task = state.tasks.find((el) => el.id === action.payload.id);
      if (task) {
        task.text = action.payload.text;
      }
    },
    markAsDone: (state, action: PayloadAction<{ id: string }>) => {
      const task = state.tasks.find((el) => el.id === action.payload.id);
      if (task) {
        task.done = true;
      }
    },
    resetTasks: (state) => {
      state.tasks = [];
    },
  },
});

export const { addTask, deleteTask, editTaskTime, updateTaskText, markAsDone, resetTasks } =
  tasksSlice.actions;

export default tasksSlice.reducer;
