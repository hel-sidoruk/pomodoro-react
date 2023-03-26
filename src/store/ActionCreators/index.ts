import * as TasksActionCreators from './tasks';
import * as PomodoroActionCreators from './pomodoro';
import * as SettingsActionCreators from './settings';

export default {
  ...TasksActionCreators,
  ...PomodoroActionCreators,
  ...SettingsActionCreators,
};
