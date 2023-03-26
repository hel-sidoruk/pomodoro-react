import * as TasksActionCreators from './tasks';
import * as PomodoroActionCreators from './pomodoro';
import * as SettingsActionCreators from './settings';
import * as StatsActionCreators from './stats';

export default {
  ...TasksActionCreators,
  ...PomodoroActionCreators,
  ...SettingsActionCreators,
  ...StatsActionCreators,
};
