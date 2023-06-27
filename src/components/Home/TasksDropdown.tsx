import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import { editTaskTime } from '../../store/slices/tasksSlice';
import { ITask } from '../../types';
import * as Icons from '../Icons';
import { DeleteTaskButton } from './DeleteTaskButton';

interface Props {
  task: ITask;
  isOpened: boolean;
  handler: (option: string | null) => void;
  edit: () => void;
}

export const TasksDropdown = ({ task, isOpened, handler, edit }: Props) => {
  const [isUpper, setIsUpper] = useState(false);

  const dispatch = useAppDispatch();
  const toggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!isOpened) {
      setIsUpper(window.innerHeight - e.clientY < 170);
    }
    handler(isOpened ? null : task.id);
  };
  const increase = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    dispatch(editTaskTime({ id: task.id, time: task.count + 1 }));
  };
  const decrease = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    dispatch(editTaskTime({ id: task.id, time: task.count - 1 }));
  };

  return (
    <div className="tasks__dropdown">
      <button className={`tasks__button ${isOpened ? 'active' : ''}`} onClick={toggleDropdown}>
        Опции
      </button>
      <ul
        className={`tasks__dropdown-list ${isOpened ? 'active' : ''} ${
          isOpened && isUpper ? 'upper' : ''
        }`}
      >
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
