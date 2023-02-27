import React from 'react';
import { AlarmIcon, FocusIcon, StopIcon, TomatoIconSmile } from '../components/Icons';
import { StatsDropdown } from '../components/Statistics';

export const Statistics = () => {
  return (
    <div className="stats">
      <div className="container">
        <div className="stats__header">
          <h2 className="stats__title">Ваша активность</h2>
          <StatsDropdown />
        </div>
        <div className="stats__body">
          <div className="stats__top">
            <div className="stats__block day">
              <h3 className="block-title">Суббота</h3>
              <p>Нет данных</p>
            </div>
            <div className="stats__block chart"></div>
            <div className="stats__block tomato">
              <TomatoIconSmile />
            </div>
          </div>
          <div className="stats__bottom">
            <div className="stats__block info">
              <div>
                <h3 className="block-title">Фокус</h3>
                <p className="info__stats">0%</p>
              </div>
              <FocusIcon />
            </div>
            <div className="stats__block info">
              <div>
                <h3 className="block-title">Время на паузе</h3>
                <p className="info__stats">0м</p>
              </div>
              <AlarmIcon />
            </div>
            <div className="stats__block info">
              <div>
                <h3 className="block-title">Остановки</h3>
                <p className="info__stats">0</p>
              </div>
              <StopIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
