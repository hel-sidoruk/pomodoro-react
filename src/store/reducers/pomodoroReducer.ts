import { PomodoroAction, PomodoroActionTypes, PomodoroState } from '../../types/pomodoro';

const initialState: PomodoroState = {
  isTaskTime: true,
  isInProcess: false,
  taskTime: 100,
  breakTime: 5,
  longBreakTime: 8,
  pomodoros: 1,
  breaks: 0,
};

export const pomodoroReducer = (state = initialState, action: PomodoroAction) => {
  switch (action.type) {
    case PomodoroActionTypes.SWITCH_TIME:
      return { ...state, isTaskTime: action.isTaskTime };
    case PomodoroActionTypes.SWITCH_IN_PROCESS:
      return { ...state, isInProcess: action.isInProcess };
    case PomodoroActionTypes.ADD_POMODORO:
      return { ...state, pomodoros: action.pomodoros };
    case PomodoroActionTypes.ADD_BREAK:
      return { ...state, breaks: action.breaks };
    default:
      return state;
  }
};
