import React from 'react';
import useActions from '../../hooks/useActions';
import * as Icons from '../Icons';
import { DeleteTaskButton } from './DeleteTaskButton';

interface Props {
  id: string;
  isOpened: boolean;
  count: number;
  handler: (option: string | null) => void;
}

export const TasksDropdown = ({ id, isOpened, count, handler }: Props) => {
  const { editTaskTime } = useActions();
  const toggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handler(isOpened ? null : id);
  };
  const increase = () => editTaskTime(id, count + 1);
  const decrease = () => editTaskTime(id, count - 1);

  return (
    <div className="tasks__dropdown">
      <button className={`tasks__button ${isOpened ? 'active' : ''}`} onClick={toggleDropdown}>
        Опции
      </button>
      <ul className={`tasks__dropdown-list ${isOpened ? 'active' : ''}`}>
        <li className="tasks__dropdown-item" onClick={increase}>
          <Icons.PlusIcon /> Увеличить
        </li>
        <li className={`tasks__dropdown-item ${count > 1 ? '' : 'disabled'}`} onClick={decrease}>
          <Icons.MinusIcon /> Уменьшить
        </li>
        <li className="tasks__dropdown-item">
          <Icons.EditIcon /> Редактировать
        </li>
        <DeleteTaskButton id={id} />
      </ul>
    </div>
  );
};
