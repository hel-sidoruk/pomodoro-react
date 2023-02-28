import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CrossIcon } from '../Icons';

interface Props {
  onClose: () => void;
  onConfirm: () => void;
}

export const Modal = ({ onClose, onConfirm }: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const close = () => {
    onClose();
    document.body.style.overflow = 'auto';
  };

  return createPortal(
    <div className="modal" onClick={close}>
      <div className="modal__content">
        <div className="modal__header">
          <button className="modal__close">
            <CrossIcon />
          </button>
          <p className="title">Удалить задачу?</p>
        </div>
        <button className="btn red" onClick={onConfirm}>
          Удалить
        </button>
        <button className="cancel-btn">Отмена</button>
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};
