import React from 'react';
import { AlarmIcon, FocusIcon, StopIcon, TomatoIcon, TomatoIconSmile } from '../components/Icons';
import { StatsDropdown } from '../components/Statistics';
import useTypedSelector from '../hooks/useTypedSelector';
import { getDay } from '../utils/getDay';
import { getMinutesWord, getPomodoroWord } from '../utils/getWord';

export const Statistics = () => {
  const focus = 4;
  const stops = 1;

  const { tasks } = useTypedSelector((state) => state.tasks);
  const { workTime, pauseTime } = useTypedSelector((state) => state.stats);
  const doneTasks = tasks.filter((el) => el.done).length || null;

  return (
    <div className="stats">
      <div className="container">
        <div className="stats__header">
          <h2 className="title">Ваша активность</h2>
          <StatsDropdown />
        </div>
        <div className="stats__body">
          <div className="stats__top">
            <div className="stats__block day">
              <h3 className="title">{getDay()}</h3>
              {doneTasks && workTime ? (
                `Вы работали над задачами в течении ${workTime} ${getMinutesWord(workTime)}`
              ) : (
                <p>Нет данных</p>
              )}
            </div>
            <div className="stats__block chart"></div>
            <div className="stats__block tomato">
              <div className="tomato__info">
                {doneTasks ? (
                  <>
                    <TomatoIcon />
                    <h4 className="title">x {doneTasks}</h4>
                  </>
                ) : (
                  <TomatoIconSmile />
                )}
              </div>
              {doneTasks && (
                <div className="tomato__descr">
                  {doneTasks} {getPomodoroWord(doneTasks)}
                </div>
              )}
            </div>
          </div>
          <div className="stats__bottom">
            <div
              className="stats__block info"
              style={{ background: focus ? '#FFDDA9' : '#f4f4f4' }}
            >
              <div>
                <h3 className="title">Фокус</h3>
                <p className="info__stats">{focus}%</p>
              </div>
              <FocusIcon fill={focus ? '#FFAE35' : ''} />
            </div>
            <div
              className="stats__block info"
              style={{ background: pauseTime ? '#DFDCFE' : '#f4f4f4' }}
            >
              <div>
                <h3 className="title">Время на паузе</h3>
                <p className="info__stats">{(pauseTime / 60).toFixed(1)}м</p>
              </div>
              <AlarmIcon fill={pauseTime ? '#9C97D7' : ''} />
            </div>
            <div
              className="stats__block info"
              style={{ background: stops ? '#C5F1FF' : '#f4f4f4' }}
            >
              <div>
                <h3 className="title">Остановки</h3>
                <p className="info__stats">{stops}</p>
              </div>
              <StopIcon fill={stops ? '#7FC2D7' : ''} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
