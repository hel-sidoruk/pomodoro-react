import { useEffect, useState } from 'react';
import { useAppDispatch } from '../store';
import {
  addBreak,
  addPomodoro,
  switchProcess,
  switchTaskTime,
} from '../store/slices/pomodoroSlice';
import { addWorkTime } from '../store/slices/statsSlice';
import { markAsDone } from '../store/slices/tasksSlice';
import useTypedSelector from './useTypedSelector';

export function useTimer() {
  const { isTaskTime, pomodoros, breaks } = useTypedSelector((state) => state.pomodoro);
  const { taskTime, breakTime, longBreakTime, longBreakFrequency } = useTypedSelector(
    (state) => state.settings
  );
  const { tasks } = useTypedSelector((state) => state.tasks);

  const dispatch = useAppDispatch();

  const [currentTime, setCurrentTime] = useState(taskTime * 60);
  const [isStarted, setIsStarted] = useState(false);
  const [timer, setTimer] = useState<ReturnType<typeof setInterval> | null>(null);

  const taskAudio = new Audio('/alert.wav');
  const breakAudio = new Audio('/break.mp3');

  const start = () => {
    setIsStarted(true);
    setTimer(setInterval(tick, 1000));
    dispatch(switchProcess(true));
  };

  const pause = () => {
    setIsStarted(false);
    timer && clearInterval(timer);
  };

  const startTask = () => {
    setCurrentTime(taskTime * 60);
    dispatch(switchTaskTime());
    dispatch(addPomodoro());
  };

  const startBreak = () => {
    setCurrentTime(breaks === longBreakFrequency ? longBreakTime * 60 : breakTime * 60);
    dispatch(switchTaskTime());
    dispatch(addBreak());
  };

  const skipTask = () => {
    dispatch(markAsDone({ id: tasks[pomodoros - 1].id }));
    dispatch(addWorkTime((taskTime * 60 - currentTime) / 60));
    if (pomodoros === tasks.length) {
      taskAudio.play();
      pause();
      switchProcess(false);
    } else {
      startBreak();
      start();
    }
  };

  const reset = () => {
    pause();
    setCurrentTime(isTaskTime ? taskTime : breakTime);
    setTimer(null);
  };

  const finish = () => {
    if (isTaskTime) {
      dispatch(markAsDone({ id: tasks[pomodoros - 1].id }));
      dispatch(addWorkTime(taskTime));
    }
    if (pomodoros === tasks.length) {
      taskAudio.play();
      pause();
      dispatch(switchProcess(false));
    } else {
      if (isTaskTime) {
        taskAudio.play();
        startBreak();
      } else {
        breakAudio.play();
        startTask();
      }
    }
  };

  useEffect(() => {
    if (!currentTime) finish();
  }, [currentTime]);

  const tick = () => {
    setCurrentTime((time) => (time ? time - 1 : 0));
  };

  return [currentTime, isStarted, start, pause, reset, skipTask] as const;
}
