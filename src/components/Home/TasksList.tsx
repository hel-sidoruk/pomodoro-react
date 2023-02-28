import React, { useEffect, useState } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import { TaskItem } from './TaskItem';

export const TasksList = () => {
  const [opened, setOpened] = useState<string | null>(null);
  const { tasks } = useTypedSelector((state) => state.tasks);

  const handler = (option: string | null) => setOpened(option);
  const total = tasks.reduce((a, b) => a + b.count, 0) * 25;
  const hours = Math.floor(total / 60);
  const minutes = total - hours * 60;

  useEffect(() => {
    const close = () => setOpened(null);
    document.body.addEventListener('click', close);
    return () => document.body.removeEventListener('click', close);
  }, []);

  return (
    <div className="tasks">
      {tasks.length ? (
        <>
          <ul className="tasks__list">
            {tasks.map((task) => (
              <TaskItem key={task.id} task={task} handler={handler} opened={opened} />
            ))}
          </ul>
          <div className="tasks__time">
            {hours ? `${hours} ч ` : ''}
            {minutes} мин
          </div>
        </>
      ) : null}
    </div>
  );
};
