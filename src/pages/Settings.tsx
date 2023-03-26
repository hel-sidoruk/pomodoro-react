import React from 'react';
import useActions from '../hooks/useActions';
import useTypedSelector from '../hooks/useTypedSelector';

export const Settings = () => {
  const { taskTime, breakTime, longBreakFrequency, longBreakTime } = useTypedSelector(
    (state) => state.settings
  );

  const { changeTaskTime, changeBreakTime, changeLongBreak, changeLongBreakFrequency } =
    useActions();

  return (
    <div className="settings">
      <div className="container">
        <h2 className="title">Настройки</h2>
        <div>
          <h3>Продолжительность &quot;помидора&quot;:</h3>
          <input
            type="number"
            value={taskTime / 60}
            onChange={(e) => changeTaskTime(e.target.value)}
          />
          <h3>Продолжительность короткого перерыва:</h3>
          <input
            type="number"
            value={breakTime / 60}
            onChange={(e) => changeBreakTime(e.target.value)}
          />
          <h3>Продолжительность длинного перерыва:</h3>
          <input
            type="number"
            value={longBreakTime / 60}
            onChange={(e) => changeLongBreak(e.target.value)}
          />
          <h3>Частота длинных перерывов:</h3>
          <input
            type="number"
            value={longBreakFrequency}
            onChange={(e) => changeLongBreakFrequency(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
