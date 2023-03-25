import { useEffect, useState } from 'react';
import useActions from './useActions';
import useTypedSelector from './useTypedSelector';

export function useTimer() {
  const { isTaskTime, taskTime, breakTime, longBreakTime, pomodoros, breaks } = useTypedSelector(
    (state) => state.pomodoro
  );
  const [currentTime, setCurrentTime] = useState(taskTime);
  const [isStarted, setIsStarted] = useState(false);
  const [timer, setTimer] = useState<ReturnType<typeof setInterval> | null>(null);

  const { tasks } = useTypedSelector((state) => state.tasks);

  const audio = new Audio('/alert.wav');

  const { switchTaskTime, switchProcess, addPomodoro, addBreak } = useActions();

  const start = () => {
    setIsStarted(true);
    setTimer(setInterval(() => tick(), 1000));
    switchProcess(true);
  };

  const pause = () => {
    setIsStarted(false);
    timer && clearInterval(timer);
  };

  const startTask = () => {
    setCurrentTime(taskTime);
    switchTaskTime();
    addPomodoro();
  };

  const startBreak = () => {
    setCurrentTime(breaks === 3 ? longBreakTime : breakTime);
    switchTaskTime();
    addBreak();
  };

  const reset = () => {
    pause();
    setCurrentTime(isTaskTime ? taskTime : breakTime);
    setTimer(null);
  };

  const finish = () => {
    audio.play();
    if (pomodoros === tasks.length) {
      pause();
      switchProcess(false);
    } else {
      if (isTaskTime) startBreak();
      else startTask();
    }
  };

  useEffect(() => {
    if (!currentTime) finish();
  }, [currentTime]);

  const tick = () => {
    setCurrentTime((time) => (time ? time - 1 : 0));
  };

  return [currentTime, isStarted, start, pause, reset] as const;
}
