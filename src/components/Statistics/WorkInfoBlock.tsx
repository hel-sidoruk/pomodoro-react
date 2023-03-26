import React from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import { getDay } from '../../utils/getDay';
import { getMinutesWord } from '../../utils/getWord';

export const WorkInfoBlock = () => {
  const { workTime } = useTypedSelector((state) => state.stats);
  const { tasks } = useTypedSelector((state) => state.tasks);
  const doneTasks = tasks.filter((el) => el.done).length || null;

  return (
    <div className="stats__block day">
      <h3 className="title">{getDay()}</h3>
      {doneTasks && workTime ? (
        <>
          Вы работали над задачами в течении{' '}
          <span className="red">
            {workTime} {getMinutesWord(workTime)}
          </span>
        </>
      ) : (
        <p>Нет данных</p>
      )}
    </div>
  );
};
