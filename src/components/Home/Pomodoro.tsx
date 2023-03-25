import React from 'react';
import { useTimer } from '../../hooks/useTimer';
import useTypedSelector from '../../hooks/useTypedSelector';

export const Pomodoro = () => {
  const [currentTime, isStarted, start, pause, reset] = useTimer();

  const { tasks } = useTypedSelector((state) => state.tasks);
  const { isTaskTime, isInProcess, pomodoros, breaks } = useTypedSelector(
    (state) => state.pomodoro
  );

  const handleTimer = () => (isStarted ? pause() : start());
  const currentTask = tasks.length ? tasks[pomodoros - 1] : null;

  const min = Math.floor(currentTime / 60);
  const sec = currentTime % 60;

  return (
    <div className={`pomodoro ${isInProcess ? (isTaskTime ? 'red' : 'green') : ''}`}>
      <div className="pomodoro__header">
        {currentTask && <span>{currentTask.text}</span>}
        {currentTask && (
          <span>
            {isTaskTime ? 'Помидор' : 'Перерыв'} {isTaskTime ? pomodoros : breaks}
          </span>
        )}
      </div>
      {currentTask ? (
        <div className="pomodoro__body">
          <div className="pomodoro__time">
            {`${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`}
            <button className="time-button">Добавить время</button>
          </div>
          <p className="pomodoro__descr">
            <span className="grey">Задача {pomodoros} -</span> {currentTask.text}
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
