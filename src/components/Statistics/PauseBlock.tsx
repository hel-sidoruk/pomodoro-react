import React from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import { AlarmIcon } from '../Icons';

export const PauseBlock = () => {
  const { pauseTime } = useTypedSelector((state) => state.stats);

  return (
    <div className="stats__block info" style={{ background: pauseTime ? '#DFDCFE' : '#f4f4f4' }}>
      <div>
        <h3 className="title">Время на паузе</h3>
        <p className="info__stats">{(pauseTime / 60).toFixed(1)}м</p>
      </div>
      <AlarmIcon fill={pauseTime ? '#9C97D7' : ''} />
    </div>
  );
};
