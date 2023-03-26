import { StatsAction, StatsActionTypes, StatsState } from '../../types/stats';

const initialState: StatsState = {
  workTime: 0,
  pauseTime: 0,
};

export const statsReducer = (state = initialState, action: StatsAction) => {
  switch (action.type) {
    case StatsActionTypes.ADD_WORK_TIME:
      return { ...state, workTime: action.workTime };
    case StatsActionTypes.ADD_PAUSE_TIME:
      return { ...state, pauseTime: action.pauseTime };
    default:
      return state;
  }
};
