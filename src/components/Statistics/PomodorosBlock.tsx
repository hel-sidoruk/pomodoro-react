import React from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import { getPomodoroWord } from '../../utils/getWord';
import { TomatoIcon, TomatoIconSmile } from '../Icons';

export const PomodorosBlock = () => {
  const { tasks } = useTypedSelector((state) => state.tasks);
  const doneTasks = tasks.filter((el) => el.done).length || null;

  return (
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
  );
};
