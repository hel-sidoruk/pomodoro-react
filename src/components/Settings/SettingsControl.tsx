import React from 'react';
import { MinusIcon, PlusIcon } from '../Icons';
import { useAppDispatch } from '../../store';
import { getMinutesWord } from '../../utils/getWord';

interface Props {
  value: number;
  changeFn: (n: number) => { payload: number; type: string };
  isBreaksControl?: boolean;
}

export const SettingsControl = ({ value, changeFn, isBreaksControl }: Props) => {
  const dispatch = useAppDispatch();

  const increase = () => {
    if (value + 1 > 60) {
      return;
    }
    dispatch(changeFn(value + 1));
  };

  const decrease = () => {
    if (value - 1 < 1) {
      return;
    }
    dispatch(changeFn(value - 1));
  };

  return (
    <div className="settings__control">
      <button className="settings__btn" onClick={decrease}>
        <MinusIcon />
      </button>
      <span className="settings__value">{value}</span>
      <button className="settings__btn" onClick={increase}>
        <PlusIcon />
      </button>
      {!isBreaksControl && <span>{getMinutesWord(value)}</span>}
    </div>
  );
};
