import React from 'react';
import { AddTaskForm, TasksList, Pomodoro } from '../components/Home';

export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home__content">
          <h2 className="title">Ура! Теперь можно начать работать:</h2>
          <ul className="home__list">
            <li className="home__list-item">
              Выберите категорию и напишите название текущей задачи
            </li>
            <li className="home__list-item">Запустите таймер («помидор»)</li>
            <li className="home__list-item">Работайте пока «помидор» не прозвонит</li>
            <li className="home__list-item">Сделайте короткий перерыв (3-5 минут)</li>
            <li className="home__list-item">
              Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые
              4 «помидора» делайте длинный перерыв (15-30 минут).
            </li>
          </ul>
          <AddTaskForm />
          <TasksList />
        </div>
        <Pomodoro />
      </div>
    </div>
  );
};
