import { useState } from 'react';

type FnReturn = [number, () => void, () => void, () => void];

export function useTimer(seconds: number): FnReturn {
  const [timer, setTimer] = useState<ReturnType<typeof setInterval> | null>(null);
  const [currentTime, setCurrentTime] = useState(seconds);

  const start = () => setTimer(setInterval(() => tick(), 1000));

  const pause = () => timer && clearInterval(timer);

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

  return [currentTime, start, pause, reset];
}
