import { useEffect, useState } from 'react';
import useActions from './useActions';
import useTypedSelector from './useTypedSelector';

export function useTimer() {
  const { isTaskTime, pomodoros, breaks } = useTypedSelector((state) => state.pomodoro);
  const { taskTime, breakTime, longBreakTime, longBreakFrequency } = useTypedSelector(
    (state) => state.settings
  );
  const { tasks } = useTypedSelector((state) => state.tasks);

  const [currentTime, setCurrentTime] = useState(taskTime * 60);
  const [isStarted, setIsStarted] = useState(false);
  const [timer, setTimer] = useState<ReturnType<typeof setInterval> | null>(null);

  const taskAudio = new Audio('/alert.wav');
  const breakAudio = new Audio('/break.mp3');

  const { switchTaskTime, switchProcess, addPomodoro, addBreak, markAsDone, addWorkTime } =
    useActions();

  const start = () => {
    setIsStarted(true);
    setTimer(setInterval(tick, 1000));
    switchProcess(true);
  };

  const pause = () => {
    setIsStarted(false);
    timer && clearInterval(timer);
  };

  const startTask = () => {
    setCurrentTime(taskTime * 60);
    switchTaskTime();
    addPomodoro();
  };

  const startBreak = () => {
    setCurrentTime(breaks === longBreakFrequency ? longBreakTime * 60 : breakTime * 60);
    switchTaskTime();
    addBreak();
  };

  const reset = () => {
    pause();
    setCurrentTime(isTaskTime ? taskTime : breakTime);
    setTimer(null);
  };

  const finish = () => {
    if (isTaskTime) {
      markAsDone(tasks[pomodoros - 1].id);
      addWorkTime(taskTime);
    }
    if (pomodoros === tasks.length) {
      taskAudio.play();
      pause();
      switchProcess(false);
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

  return [currentTime, isStarted, start, pause, reset] as const;
}
