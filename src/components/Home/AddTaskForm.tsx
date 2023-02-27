import React, { useState } from 'react';

export const AddTaskForm = () => {
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const onSubmit = (e: React.FormEvent) => e.preventDefault();

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
