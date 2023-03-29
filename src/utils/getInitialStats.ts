import { IWorkStats } from '../types';
import { localStorageKey } from './constants';
import { getDayFromNow } from './getDaysArray';

export function getInitialStats() {
  const initialStats = new Array(21)
    .fill(0)
    .map((_, i) => ({ date: getDayFromNow(i).getTime(), workTime: 0 }))
    .reverse();

  const today = getDayFromNow(0).getTime();
  let isToday = false;

  const savedStats = localStorage.getItem(localStorageKey);
  if (savedStats) {
    const parsed: IWorkStats = JSON.parse(savedStats);
    if (parsed[parsed.length - 1].date === today) {
      isToday = true;
    }
    initialStats.forEach((el) => {
      const value = parsed.find((item) => item.date === el.date);
      if (value) {
        el.workTime = value.workTime;
      }
    });
  }

  return { initialStats, isToday };
}
