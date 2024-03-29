import React from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import { FocusIcon } from '../Icons';

export const FocusBlock = () => {
  const { workTime, pauseTime } = useTypedSelector((state) => state.stats);

  const total = workTime * 60 + pauseTime;
  const focus = workTime ? Math.round(((workTime * 60) / total) * 100) : 0;

  return (
    <div className="stats__block info" style={{ background: focus ? '#FFDDA9' : '#f4f4f4' }}>
      <div>
        <h3 className="title">Фокус</h3>
        <p className="info__stats">{focus}%</p>
      </div>
      <FocusIcon fill={focus ? '#FFAE35' : ''} />
    </div>
  );
};
