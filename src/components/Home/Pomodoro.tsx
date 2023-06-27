import React, { useState } from 'react';
import { useTimer } from '../../hooks/useTimer';
import useTypedSelector from '../../hooks/useTypedSelector';
import { useAppDispatch } from '../../store';
import { addPauseTime } from '../../store/slices/statsSlice';
import { formatTime } from '../../utils/formatTime';

export const Pomodoro = () => {
  const [currentTime, isStarted, start, pause, reset, skipTask] = useTimer();

  const dispatch = useAppDispatch();

  const { tasks } = useTypedSelector((state) => state.tasks);
  const { isTaskTime, isInProcess, pomodoros, breaks } = useTypedSelector(
    (state) => state.pomodoro
  );

  const [pauseTime, setPauseTime] = useState<number | null>(null);

  const handleTimer = () => {
    if (!isStarted && !isInProcess) {
      start();
      return;
    }
    if (isStarted) {
      pause();
      setPauseTime(Date.now());
    } else {
      start();
      if (pauseTime) {
        dispatch(addPauseTime(Math.floor((Date.now() - pauseTime) / 1000)));
      }
    }
  };
  const currentTask = tasks.length ? tasks[pomodoros - 1] : null;

  const isAllDone = tasks.length && tasks.filter((el) => el.done).length === tasks.length;

  if (isAllDone) {
    return (
      <div className={`pomodoro ${isInProcess ? (isTaskTime ? 'red' : 'green') : ''}`}>
        <div className="pomodoro__header"></div>
        <p className="pomodoro__default">{'Все задачи выполнены!'}</p>
      </div>
    );
  }
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
            {formatTime(currentTime)}
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
            {!isStarted && isInProcess ? (
              <button className="btn btn-outlined" onClick={skipTask}>
                Сделано
              </button>
            ) : (
              <button
                className={`btn btn-outlined ${isInProcess ? '' : 'disabled'}`}
                onClick={reset}
              >
                Стоп
              </button>
            )}
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
