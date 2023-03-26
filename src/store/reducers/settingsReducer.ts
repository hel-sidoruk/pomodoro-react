import { SettingsAction, SettingsActionTypes, SettingsState } from '../../types/settings';

const initialState: SettingsState = {
  taskTime: 0.2,
  breakTime: 0.1,
  longBreakTime: 0.15,
  longBreakFrequency: 3,
};

export const settingsReducer = (state = initialState, action: SettingsAction) => {
  switch (action.type) {
    case SettingsActionTypes.CHANGE_TASK_TIME:
      return { ...state, taskTime: action.taskTime };
    case SettingsActionTypes.CHANGE_BREAK_TIME:
      return { ...state, breakTime: action.breakTime };
    case SettingsActionTypes.CHANGE_LONG_BREAK:
      return { ...state, longBreakTime: action.longBreakTime };
    case SettingsActionTypes.CHANGE_LONG_BREAK_FREQUENCY:
      return { ...state, longBreakFrequency: action.longBreakFrequency };
    default:
      return state;
  }
};
