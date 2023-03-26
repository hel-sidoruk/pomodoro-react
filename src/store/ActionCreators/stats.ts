import { Dispatch } from 'redux';
import { ThunkActionType } from '../../types';
import { StatsAction, StatsActionTypes } from '../../types/stats';

export function addWorkTime(minutes: number): ThunkActionType {
  return (dispatch: Dispatch<StatsAction>, getState) => {
    const { workTime } = getState().stats;
    dispatch({ type: StatsActionTypes.ADD_WORK_TIME, workTime: workTime + minutes });
  };
}

export function addPauseTime(seconds: number): ThunkActionType {
  return (dispatch: Dispatch<StatsAction>, getState) => {
    const { pauseTime } = getState().stats;
    dispatch({ type: StatsActionTypes.ADD_PAUSE_TIME, pauseTime: pauseTime + seconds });
  };
}
