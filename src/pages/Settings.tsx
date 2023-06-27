import React from 'react';
import useTypedSelector from '../hooks/useTypedSelector';
import {
  changeBreakTime,
  changeLongBreak,
  changeLongBreakFrequency,
  changeTaskTime,
} from '../store/slices/settingsSlice';
import { SettingsControl } from '../components/Settings/SettingsControl';

export const Settings = () => {
  const { taskTime, breakTime, longBreakFrequency, longBreakTime } = useTypedSelector(
    (state) => state.settings
  );

  return (
    <div className="settings">
      <div className="container">
        <h2 className="title">Настройки</h2>
        <div>
          <div className="settings__field">
            <h3 className="settings__subtitle">Продолжительность &quot;помидора&quot;:</h3>
            <SettingsControl value={taskTime} changeFn={changeTaskTime} />
          </div>
          <div className="settings__field">
            <h3 className="settings__subtitle">Продолжительность короткого перерыва:</h3>
            <SettingsControl value={breakTime} changeFn={changeBreakTime} />
          </div>
          <div className="settings__field">
            <h3 className="settings__subtitle">Продолжительность длинного перерыва:</h3>
            <SettingsControl value={longBreakTime} changeFn={changeLongBreak} />
          </div>
          <div className="settings__field">
            <h3 className="settings__subtitle">Частота длинных перерывов:</h3>
            <SettingsControl
              value={longBreakFrequency}
              changeFn={changeLongBreakFrequency}
              isBreaksControl
            />
          </div>
        </div>
      </div>
    </div>
  );
};
