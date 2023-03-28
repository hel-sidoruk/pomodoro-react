export interface SettingsState {
  taskTime: number;
  breakTime: number;
  longBreakTime: number;
  longBreakFrequency: number;
}

export interface PomodoroState {
  isTaskTime: boolean;
  isInProcess: boolean;
  pomodoros: number;
  breaks: number;
}

export interface StatsState {
  workTime: number;
  pauseTime: number;
  stops: number;
  weeksAgo: number;
  workTimeStats: IWorkStats;
}

export interface ITask {
  id: string;
  text: string;
  count: number;
  done: boolean;
}
export interface TasksState {
  tasks: ITask[];
}

export type IWorkStats = { date: number; workTime: number }[];
