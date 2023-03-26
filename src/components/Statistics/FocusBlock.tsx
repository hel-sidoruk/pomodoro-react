import React from 'react';
import { FocusIcon } from '../Icons';

export const FocusBlock = () => {
  const focus = 4;

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
