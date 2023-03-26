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
