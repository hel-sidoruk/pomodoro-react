import * as TasksActionCreators from './tasks';
import * as PomodoroActionCreators from './pomodoro';

export default {
  ...TasksActionCreators,
  ...PomodoroActionCreators,
};
