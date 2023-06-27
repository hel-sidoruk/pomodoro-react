import React from 'react';
import { Link } from 'react-router-dom';
import { SettingsIcon, StatsIcon, SunIcon, MoonIcon } from './Icons';
import { useAppDispatch } from '../store';
import { changeTheme } from '../store/slices/themeReducer';
import useTypedSelector from '../hooks/useTypedSelector';

export const Header = () => {
  const { theme } = useTypedSelector((state) => state.theme);

  const dispatch = useAppDispatch();

  const changeThemeFn = () => dispatch(changeTheme(theme === 'dark' ? 'light' : 'dark'));

  return (
    <div className="header">
      <div className="container">
        <Link to="/" className="header__logo">
          <img src="/tomato.svg" alt="Logo image" />
          <h1 className="header__title">pomodoro_box</h1>
        </Link>
        <nav className="header__nav">
          <button className="header__btn" onClick={changeThemeFn}>
            {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
          </button>
          <Link to="/statistics" className="header__nav-item">
            <StatsIcon />
            Статистика
          </Link>
          <Link to="/settings" className="header__nav-item">
            <SettingsIcon />
            Настройки
          </Link>
        </nav>
      </div>
    </div>
  );
};
