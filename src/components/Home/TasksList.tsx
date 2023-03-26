import React, { useEffect, useState } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import { TaskItem } from './TaskItem';

export const TasksList = () => {
  const [opened, setOpened] = useState<string | null>(null);
  const { tasks } = useTypedSelector((state) => state.tasks);
  const { taskTime } = useTypedSelector((state) => state.settings);

  const todoTasks = tasks.filter((el) => !el.done);

  const handler = (option: string | null) => setOpened(option);
  const total = todoTasks.reduce((a, b) => a + b.count, 0) * taskTime;
  const hours = Math.floor(total / 60);
  const minutes = total - hours * 60;

  useEffect(() => {
    const close = () => setOpened(null);
    document.body.addEventListener('click', close);
    return () => document.body.removeEventListener('click', close);
  }, []);

  return (
    <div className="tasks">
      {todoTasks.length ? (
        <>
          <ul className="tasks__list">
            {todoTasks.map((task) => (
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
