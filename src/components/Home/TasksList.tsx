import React, { useEffect, useState } from 'react';
import { TasksDropdown } from './TasksDropdown';

export const TasksList = () => {
  const [openedDropdown, setOpenedDropdown] = useState<string | null>(null);
  const handler = (option: string | null) => setOpenedDropdown(option);

  useEffect(() => {
    const close = () => setOpenedDropdown(null);
    document.body.addEventListener('click', close);
    return () => document.body.removeEventListener('click', close);
  }, []);

  return (
    <div className="tasks">
      <ul className="tasks__list">
        <li className="tasks__item">
          <div className="tasks__item-count">1</div>
          <p className="tasks__descr">Сверстать сайт</p>
          <TasksDropdown isOpened={openedDropdown === '1'} handler={handler} id="1" />
        </li>
        <li className="tasks__item">
          <div className="tasks__item-count">1</div>
          <p className="tasks__descr">Сверстать сайт</p>
          <TasksDropdown isOpened={openedDropdown === '2'} handler={handler} id="2" />
        </li>
        <li className="tasks__item">
          <div className="tasks__item-count">1</div>
          <p className="tasks__descr">Сверстать сайт</p>
          <TasksDropdown isOpened={openedDropdown === '3'} handler={handler} id="3" />
        </li>
      </ul>
      <div className="tasks__time">25 мин</div>
    </div>
  );
};
