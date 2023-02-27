import React, { useEffect, useState } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import { TasksDropdown } from './TasksDropdown';

export const TasksList = () => {
  const [openedDropdown, setOpenedDropdown] = useState<string | null>(null);
  const { tasks } = useTypedSelector((state) => state.tasks);

  const handler = (option: string | null) => setOpenedDropdown(option);

  useEffect(() => {
    const close = () => setOpenedDropdown(null);
    document.body.addEventListener('click', close);
    return () => document.body.removeEventListener('click', close);
  }, []);

  return (
    <div className="tasks">
      {tasks.length ? (
        <>
          <ul className="tasks__list">
            {tasks.map(({ id, text, count }) => (
              <li key={id} className="tasks__item">
                <div className="tasks__item-count">{count}</div>
                <p className="tasks__descr">{text}</p>
                <TasksDropdown isOpened={openedDropdown === id} handler={handler} id={id} />
              </li>
            ))}
          </ul>
          <div className="tasks__time">25 мин</div>
        </>
      ) : null}
    </div>
  );
};
