import React from 'react';
import * as Icons from '../Icons';

interface Props {
  id: string;
  isOpened: boolean;
  handler: (option: string | null) => void;
}
export const TasksDropdown = ({ id, isOpened, handler }: Props) => {
  const toggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handler(isOpened ? null : id);
  };

  return (
    <div className="tasks__dropdown">
      <button className={`tasks__button ${isOpened ? 'active' : ''}`} onClick={toggleDropdown}>
        Опции
      </button>
      <ul className={`tasks__dropdown-list ${isOpened ? 'active' : ''}`}>
        <li className="tasks__dropdown-item">
          <Icons.PlusIcon /> Увеличить
        </li>
        <li className="tasks__dropdown-item disabled">
          <Icons.MinusIcon /> Уменьшить
        </li>
        <li className="tasks__dropdown-item">
          <Icons.EditIcon /> Редактировать
        </li>
        <li className="tasks__dropdown-item">
          <Icons.DeleteIcon /> Удалить
        </li>
      </ul>
    </div>
  );
};
