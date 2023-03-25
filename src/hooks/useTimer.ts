import { useState } from 'react';

type FnReturn = [number, boolean, () => void, () => void, () => void];

export function useTimer(seconds: number): FnReturn {
  const [timer, setTimer] = useState<ReturnType<typeof setInterval> | null>(null);
  const [currentTime, setCurrentTime] = useState(seconds);
  const [isStarted, setIsStarted] = useState(false);

  const start = () => {
    setIsStarted(true);
    setTimer(setInterval(() => tick(), 1000));
  };

  const pause = () => {
    setIsStarted(false);
    timer && clearInterval(timer);
  };

  const reset = () => {
    pause();
    setCurrentTime(seconds);
  };

  const tick = () => {
    setCurrentTime((time) => {
      if (!time) {
        pause();
        return 0;
      }
      return time - 1;
    });
  };

  return [currentTime, isStarted, start, pause, reset];
}
