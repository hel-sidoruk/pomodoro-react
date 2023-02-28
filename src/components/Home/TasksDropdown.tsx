import React from 'react';
import useActions from '../../hooks/useActions';
import { ITask } from '../../types/task';
import * as Icons from '../Icons';
import { DeleteTaskButton } from './DeleteTaskButton';

interface Props {
  task: ITask;
  isOpened: boolean;
  handler: (option: string | null) => void;
  edit: () => void;
}

export const TasksDropdown = ({ task, isOpened, handler, edit }: Props) => {
  const { editTaskTime } = useActions();
  const toggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handler(isOpened ? null : task.id);
  };
  const increase = () => editTaskTime(task.id, task.count + 1);
  const decrease = () => editTaskTime(task.id, task.count - 1);

  return (
    <div className="tasks__dropdown">
      <button className={`tasks__button ${isOpened ? 'active' : ''}`} onClick={toggleDropdown}>
        Опции
      </button>
      <ul className={`tasks__dropdown-list ${isOpened ? 'active' : ''}`}>
        <li className="tasks__dropdown-item" onClick={increase}>
          <Icons.PlusIcon /> Увеличить
        </li>
        <li
          className={`tasks__dropdown-item ${task.count > 1 ? '' : 'disabled'}`}
          onClick={decrease}
        >
          <Icons.MinusIcon /> Уменьшить
        </li>
        <li className="tasks__dropdown-item" onClick={edit}>
          <Icons.EditIcon /> Редактировать
        </li>
        <DeleteTaskButton id={task.id} />
      </ul>
    </div>
  );
};
