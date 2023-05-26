import React from 'react';
import style from './style.module.css';

function Vacancy({ vacancy }) {
  return (
    <>
      <div className={style['summary']}>
        <h1>{vacancy.vacancy}</h1>
        <div className={style['flex']}>
          <p>{vacancy.salary}</p>
          <p>{vacancy.workday}</p>
        </div>
        <p>{vacancy.city}</p>
      </div>

      <div className={style['content']}>
        <div>
          <h2>Обязанности:</h2>
          {vacancy.responsibilities.map((el, index) => (
            <p key={index}>{el}</p>
          ))}
        </div>
        <div>
          <h2>Требования:</h2>
          {vacancy.requirements.map((el, index) => (
            <p key={index}>{el}</p>
          ))}
        </div>
        <div>
          <h2>Условия:</h2>
          {vacancy.conditions.map((el, index) => (
            <p key={index}>{el}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Vacancy;
