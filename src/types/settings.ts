export interface SettingsState {
  taskTime: number;
  breakTime: number;
  longBreakTime: number;
}

export enum SettingsActionTypes {
  CHANGE_TASK_TIME = 'CHANGE_TASK_TIME',
  CHANGE_BREAK_TIME = 'CHANGE_BREAK_TIME',
  CHANGE_LONG_BREAK = 'CHANGE_LONG_BREAK',
}

interface ChangeTaskTime {
  type: SettingsActionTypes.CHANGE_TASK_TIME;
  taskTime: number;
}
interface ChangeBreakTime {
  type: SettingsActionTypes.CHANGE_BREAK_TIME;
  breakTime: number;
}
interface ChangeLongBreak {
  type: SettingsActionTypes.CHANGE_LONG_BREAK;
  longBreakTime: number;
}

export type SettingsAction = ChangeTaskTime | ChangeBreakTime | ChangeLongBreak;
