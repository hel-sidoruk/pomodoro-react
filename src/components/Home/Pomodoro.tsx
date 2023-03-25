import React from 'react';
import { useTimer } from '../../hooks/useTimer';
import useTypedSelector from '../../hooks/useTypedSelector';

export const Pomodoro = () => {
  const SECONDS = 10;
  const [currentTime, isStarted, start, pause, reset] = useTimer(SECONDS);

  const { tasks } = useTypedSelector((state) => state.tasks);

  const handleTimer = () => (isStarted ? pause() : start());
  const isInProcess = isStarted || currentTime !== SECONDS;

  const currentTask = tasks.length ? tasks[0] : null;

  return (
    <div className={`pomodoro ${isInProcess ? 'started' : ''}`}>
      <div className="pomodoro__header">
        {currentTask && <span>{currentTask.text}</span>}
        {currentTask && <span>Помидор 1</span>}
      </div>
      {currentTask ? (
        <div className="pomodoro__body">
          <div className="pomodoro__time">
            {currentTime}
            <button className="time-button">Добавить время</button>
          </div>
          <p className="pomodoro__descr">
            <span className="grey">Задача 1 -</span>{' '}
            {currentTask ? currentTask.text : 'Добавьте задачу'}
          </p>
          <div className="pomodoro__buttons">
            <button className="btn" onClick={handleTimer}>
              {isStarted && isInProcess
                ? 'Пауза'
                : !isStarted && isInProcess
                ? 'Продолжить'
                : 'Старт'}
            </button>
            <button className={`btn btn-outlined ${isInProcess ? '' : 'disabled'}`} onClick={reset}>
              {!isStarted && isInProcess ? 'Сделано' : 'Стоп'}
            </button>
          </div>
        </div>
      ) : (
        <p className="pomodoro__default">
          {'Задач на сегодня нет.\nДобавьте, чтобы начать работу с Pomodoro'}
        </p>
      )}
    </div>
  );
};
