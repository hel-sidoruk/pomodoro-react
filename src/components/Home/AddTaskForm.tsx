import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import useActions from '../../hooks/useActions';

export const AddTaskForm = () => {
  const [value, setValue] = useState('');
  const { addTask } = useActions();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value) return;
    addTask({ id: nanoid(), text: value, count: 1 });
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
