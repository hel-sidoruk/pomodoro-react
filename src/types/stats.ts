export interface StatsState {
  workTime: number;
  pauseTime: number;
}

export enum StatsActionTypes {
  ADD_WORK_TIME = 'ADD_WORK_TIME',
  ADD_PAUSE_TIME = 'ADD_PAUSE_TIME',
}

interface AddWorkTime {
  type: StatsActionTypes.ADD_WORK_TIME;
  workTime: number;
}

interface AddPauseTime {
  type: StatsActionTypes.ADD_PAUSE_TIME;
  pauseTime: number;
}

export type StatsAction = AddWorkTime | AddPauseTime;
