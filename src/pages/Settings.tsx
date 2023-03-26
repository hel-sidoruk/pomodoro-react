import React from 'react';
import useTypedSelector from '../hooks/useTypedSelector';
import { useAppDispatch } from '../store';
import {
  changeBreakTime,
  changeLongBreak,
  changeLongBreakFrequency,
  changeTaskTime,
} from '../store/slices/settingsSlice';
import { getMinutesWord } from '../utils/getWord';

export const Settings = () => {
  const { taskTime, breakTime, longBreakFrequency, longBreakTime } = useTypedSelector(
    (state) => state.settings
  );

  const dispatch = useAppDispatch();

  return (
    <div className="settings">
      <div className="container">
        <h2 className="title">Настройки</h2>
        <div>
          <h3>Продолжительность &quot;помидора&quot;:</h3>
          <input
            type="number"
            value={taskTime}
            onChange={(e) => dispatch(changeTaskTime(+e.target.value))}
          />
          {getMinutesWord(taskTime)}
          <h3>Продолжительность короткого перерыва:</h3>
          <input
            type="number"
            value={breakTime}
            onChange={(e) => dispatch(changeBreakTime(+e.target.value))}
          />
          {getMinutesWord(breakTime)}
          <h3>Продолжительность длинного перерыва:</h3>
          <input
            type="number"
            value={longBreakTime}
            onChange={(e) => dispatch(changeLongBreak(+e.target.value))}
          />
          {getMinutesWord(longBreakTime)}
          <h3>Частота длинных перерывов:</h3>
          <input
            type="number"
            value={longBreakFrequency}
            onChange={(e) => dispatch(changeLongBreakFrequency(+e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};
