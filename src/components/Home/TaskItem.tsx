import React, { useEffect, useRef, useState } from 'react';
import useActions from '../../hooks/useActions';
import { ITask } from '../../types/task';
import { TasksDropdown } from './TasksDropdown';

interface Props {
  task: ITask;
  opened: string | null;
  handler: (opt: string | null) => void;
}

export const TaskItem = ({ task, opened, handler }: Props) => {
  const [isEdited, setIsEdited] = useState(false);
  const [text, setText] = useState(task.text);
  const { updateTaskText } = useActions();
  const ref = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);
  const edit = () => setIsEdited(true);
  const close = () => setIsEdited(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateTaskText(task.id, text);
    close();
  };

  useEffect(() => {
    isEdited && ref.current?.focus();
  }, [isEdited]);

  return (
    <li className="tasks__item">
      <div className="tasks__item-count">{task.count}</div>
      {isEdited ? (
        <form onSubmit={onSubmit}>
          <input
            ref={ref}
            className="tasks__input"
            onBlur={close}
            value={text}
            onChange={onChange}
          />
        </form>
      ) : (
        <p className="tasks__descr">{task.text}</p>
      )}
      <TasksDropdown edit={edit} isOpened={opened === task.id} handler={handler} task={task} />
    </li>
  );
};
