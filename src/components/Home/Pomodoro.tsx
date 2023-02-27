import React from 'react';

export const Pomodoro = () => {
  return (
    <div className="pomodoro">
      <div className="pomodoro__header">
        <span>Сверстать сайт</span>
        <span>Помидор 1</span>
      </div>
      <div className="pomodoro__body">
        <div className="pomodoro__time">
          25:00
          <button className="time-button">Добавить время</button>
        </div>
        <p className="pomodoro__descr">
          <span className="grey">Задача 1 -</span> Сверстать сайт
        </p>
        <div className="pomodoro__buttons">
          <button className="btn">Старт</button>
          <button className="btn btn-outlined disabled">Стоп</button>
        </div>
      </div>
    </div>
  );
};
