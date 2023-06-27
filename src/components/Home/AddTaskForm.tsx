import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import { addTask } from '../../store/slices/tasksSlice';

export const AddTaskForm = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    dispatch(addTask({ id: nanoid(), text: value, count: 1, done: false }));
    setValue('');
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={value}
        className="add-form__input"
        placeholder="Название задачи"
      />
      <button className="btn" type="submit">
        Добавить
      </button>
    </form>
  );
};
