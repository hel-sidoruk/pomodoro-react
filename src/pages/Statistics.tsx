import React from 'react';
import * as StatsComponents from '../components/Statistics';

export const Statistics = () => {
  const data = [1, 5, 3, 4, 2, 3, 6];
  return (
    <div className="stats">
      <div className="container">
        <div className="stats__header">
          <h2 className="title">Ваша активность</h2>
          <StatsComponents.StatsDropdown />
        </div>
        <div className="stats__body">
          <div className="stats__top">
            <StatsComponents.WorkInfoBlock />
            <div className="stats__block chart">
              <StatsComponents.BarChart data={data} />
            </div>
            <StatsComponents.PomodorosBlock />
          </div>
          <div className="stats__bottom">
            <StatsComponents.FocusBlock />
            <StatsComponents.PauseBlock />
            <StatsComponents.StopsBlock />
          </div>
        </div>
      </div>
    </div>
  );
};
