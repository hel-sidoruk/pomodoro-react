import React, { useEffect } from 'react';
import { useAppDispatch } from '../store';
import { resetPomodoro } from '../store/slices/pomodoroSlice';
import { resetStats, restoreStats } from '../store/slices/statsSlice';
import { resetTasks } from '../store/slices/tasksSlice';
import { localStorageKey } from '../utils/constants';
import { getInitialStats } from '../utils/getInitialStats';
import { Header } from './Header';
import useTypedSelector from '../hooks/useTypedSelector';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const { theme } = useTypedSelector((state) => state.theme);

  useEffect(() => {
    const { initialStats, isToday } = getInitialStats();

    if (!isToday) {
      dispatch(resetPomodoro());
      dispatch(resetStats());
      dispatch(resetTasks());
    }

    dispatch(restoreStats(initialStats));
    localStorage.setItem(localStorageKey, JSON.stringify(initialStats));
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Header />
      {children}
    </>
  );
};
