export interface PomodoroState {
  isTaskTime: boolean;
  isInProcess: boolean;
  pomodoros: number;
  breaks: number;
}

export enum PomodoroActionTypes {
  SWITCH_TIME = 'SWITCH_TIME',
  SWITCH_IN_PROCESS = 'SWITCH_IN_PROCESS',
  ADD_POMODORO = 'ADD_POMODORO',
  ADD_BREAK = 'ADD_BREAK',
}
interface SwitchTimeAction {
  type: PomodoroActionTypes.SWITCH_TIME;
  isTaskTime: boolean;
}
interface SwitchProcessAction {
  type: PomodoroActionTypes.SWITCH_IN_PROCESS;
  isInProcess: boolean;
}
interface AddPomodoroAction {
  type: PomodoroActionTypes.ADD_POMODORO;
  pomodoros: number;
}
interface AddBreakAction {
  type: PomodoroActionTypes.ADD_BREAK;
  breaks: number;
}
export type PomodoroAction =
  | SwitchTimeAction
  | SwitchProcessAction
  | AddPomodoroAction
  | AddBreakAction;
