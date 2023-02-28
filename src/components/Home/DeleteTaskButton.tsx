import React, { useState } from 'react';
import useActions from '../../hooks/useActions';
import { DeleteIcon } from '../Icons';
import { Modal } from '../UI/Modal';

export const DeleteTaskButton = ({ id }: { id: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { deleteTask } = useActions();

  const close = () => setIsModalOpen(false);
  const open = () => setIsModalOpen(true);
  const onConfirm = () => deleteTask(id);

  return (
    <>
      <li className="tasks__dropdown-item" onClick={open}>
        <DeleteIcon /> Удалить
      </li>
      {isModalOpen && <Modal onClose={close} onConfirm={onConfirm} />}
    </>
  );
};
