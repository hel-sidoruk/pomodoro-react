import React from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import { StopIcon } from '../Icons';

export const StopsBlock = () => {
  const { stops } = useTypedSelector((state) => state.stats);

  return (
    <div className="stats__block info" style={{ background: stops ? '#C5F1FF' : '#f4f4f4' }}>
      <div>
        <h3 className="title">Остановки</h3>
        <p className="info__stats">{stops}</p>
      </div>
      <StopIcon fill={stops ? '#7FC2D7' : ''} />
    </div>
  );
};
