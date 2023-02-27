import React, { useEffect, useState } from 'react';
import { ArrowIcon } from '../Icons';

const values = ['Эта неделя', 'Прошедшая неделя', '2 недели назад'];

export const StatsDropdown = () => {
  const [value, setValue] = useState(values[0]);
  const [isActive, setIsActive] = useState(false);

  const toggle = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    setIsActive((active) => !active);
  };
  const close = () => setIsActive(false);

  useEffect(() => {
    document.body.addEventListener('click', close);
    return () => document.body.removeEventListener('click', close);
  }, []);

  return (
    <div className={`stats-dropdown ${isActive ? 'active' : ''}`}>
      <span className="stats-dropdown__top" onClick={toggle}>
        {value}
        <ArrowIcon />
      </span>
      <ul className="stats-dropdown__bottom">
        {values
          .filter((el) => el !== value)
          .map((item) => (
            <li key={item} onClick={() => setValue(item)} className="stats-dropdown__item">
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};
