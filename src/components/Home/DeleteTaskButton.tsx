import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import { deleteTask } from '../../store/slices/tasksSlice';
import { DeleteIcon } from '../Icons';
import { Modal } from '../UI/Modal';

export const DeleteTaskButton = ({ id }: { id: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const close = () => setIsModalOpen(false);
  const open = () => setIsModalOpen(true);
  const onConfirm = () => dispatch(deleteTask(id));

  return (
    <>
      <li className="tasks__dropdown-item" onClick={open}>
        <DeleteIcon /> Удалить
      </li>
      {isModalOpen && <Modal onClose={close} onConfirm={onConfirm} />}
    </>
  );
};
