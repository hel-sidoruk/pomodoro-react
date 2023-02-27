import React from 'react';
import { Link } from 'react-router-dom';
import { SettingsIcon, StatsIcon } from './Icons';

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/" className="header__logo">
          <img src="/tomato.svg" alt="Logo image" />
          <h1 className="header__title">pomodoro_box</h1>
        </Link>
        <nav className="header__nav">
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
