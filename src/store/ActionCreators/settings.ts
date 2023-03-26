import { ActionCreator } from 'redux';
import { SettingsAction, SettingsActionTypes } from '../../types/settings';

export const changeTaskTime: ActionCreator<SettingsAction> = (minutes: number) => ({
  type: SettingsActionTypes.CHANGE_TASK_TIME,
  taskTime: minutes,
});

export const changeBreakTime: ActionCreator<SettingsAction> = (minutes: number) => ({
  type: SettingsActionTypes.CHANGE_BREAK_TIME,
  breakTime: minutes,
});

export const changeLongBreak: ActionCreator<SettingsAction> = (minutes: number) => ({
  type: SettingsActionTypes.CHANGE_LONG_BREAK,
  longBreakTime: minutes,
});

export const changeLongBreakFrequency: ActionCreator<SettingsAction> = (count: number) => ({
  type: SettingsActionTypes.CHANGE_LONG_BREAK_FREQUENCY,
  longBreakFrequency: count,
});
