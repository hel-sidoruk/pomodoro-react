import React, { useEffect } from 'react';
import { useAppDispatch } from '../store';
import { restoreStats } from '../store/slices/statsSlice';
import { localStorageKey } from '../utils/constants';
import { getInitialStats } from '../utils/getInitialStats';
import { Header } from './Header';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const initialStats = getInitialStats();

    dispatch(restoreStats(initialStats));
    localStorage.setItem(localStorageKey, JSON.stringify(initialStats));
  }, []);

  return (
    <>
      <Header />
      {children}
    </>
  );
};
