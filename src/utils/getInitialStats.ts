import { IWorkStats } from '../types';
import { localStorageKey } from './constants';
import { getDayFromNow } from './getDaysArray';

export function getInitialStats() {
  const stats = new Array(21)
    .fill(0)
    .map((_, i) => ({ date: getDayFromNow(i).getTime(), workTime: 0 }))
    .reverse();

  const savedStats = localStorage.getItem(localStorageKey);
  if (savedStats) {
    const parsed: IWorkStats = JSON.parse(savedStats);
    stats.forEach((el) => {
      const value = parsed.find((item) => item.date === el.date);
      if (value) {
        el.workTime = value.workTime;
      }
    });
  }

  return stats;
}
