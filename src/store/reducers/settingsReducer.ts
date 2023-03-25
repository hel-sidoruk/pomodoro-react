import { SettingsAction, SettingsActionTypes, SettingsState } from '../../types/settings';

const initialState: SettingsState = {
  taskTime: 100,
  breakTime: 5,
  longBreakTime: 8,
};

export const settingsReducer = (state = initialState, action: SettingsAction) => {
  switch (action.type) {
    case SettingsActionTypes.CHANGE_TASK_TIME:
      return { ...state, taskTime: action.taskTime };
    case SettingsActionTypes.CHANGE_BREAK_TIME:
      return { ...state, breakTime: action.breakTime };
    case SettingsActionTypes.CHANGE_LONG_BREAK:
      return { ...state, longBreakTime: action.longBreakTime };
    default:
      return state;
  }
};
