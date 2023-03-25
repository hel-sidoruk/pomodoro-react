import { ActionCreator, Dispatch } from 'redux';
import { ThunkActionType } from '../../types';
import { PomodoroAction, PomodoroActionTypes } from '../../types/pomodoro';

export function switchTaskTime(): ThunkActionType {
  return (dispatch: Dispatch<PomodoroAction>, getState) => {
    const { isTaskTime } = getState().pomodoro;
    dispatch({ type: PomodoroActionTypes.SWITCH_TIME, isTaskTime: !isTaskTime });
  };
}

export const switchProcess: ActionCreator<PomodoroAction> = (val: boolean) => ({
  type: PomodoroActionTypes.SWITCH_IN_PROCESS,
  isInProcess: val,
});

export function addPomodoro(): ThunkActionType {
  return (dispatch: Dispatch<PomodoroAction>, getState) => {
    const { pomodoros } = getState().pomodoro;
    dispatch({ type: PomodoroActionTypes.ADD_POMODORO, pomodoros: pomodoros + 1 });
  };
}

export function addBreak(): ThunkActionType {
  return (dispatch: Dispatch<PomodoroAction>, getState) => {
    const { breaks } = getState().pomodoro;
    dispatch({ type: PomodoroActionTypes.ADD_BREAK, breaks: breaks + 1 });
  };
}
