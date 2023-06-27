import React from 'react';
import useTypedSelector from '../hooks/useTypedSelector';
import {
  changeBreakTime,
  changeLongBreak,
  changeLongBreakFrequency,
  changeTaskTime,
} from '../store/slices/settingsSlice';
import { SettingsControl } from '../components/Settings/SettingsControl';
import { useAppDispatch } from '../store';
import { changeTheme } from '../store/slices/themeReducer';
import { MoonIcon, SunIcon } from '../components/Icons';

export const Settings = () => {
  const { taskTime, breakTime, longBreakFrequency, longBreakTime } = useTypedSelector(
    (state) => state.settings
  );
  const { theme } = useTypedSelector((state) => state.theme);

  const dispatch = useAppDispatch();
  const toggle = () => dispatch(changeTheme(theme === 'dark' ? 'light' : 'dark'));

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
          <div className="settings__field">
            <h3 className="settings__subtitle">Темная тема:</h3>
            <button className={`settings__toggle ${theme}`} onClick={toggle}>
              <SunIcon />
              <MoonIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
