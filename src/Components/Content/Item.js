import React, { useState } from 'react';
import style from './style.module.css';

function Item({ vacancyItem }) {
  const [save, setSave] = useState(false);

  return (
    <div className={style['wrapper']}>
      <div className={style['item']}>
        <div className={style['content']}>
          <h2 className={style['vacancy-h']}>{vacancyItem.vacancy}</h2>

          <div className={style['flex']}>
            <p className={style['salary']}>{vacancyItem.salary}</p>
            <p>{vacancyItem.workday}</p>
          </div>

          <div className={style['location']}>
            <div className={style['img']}> </div>
            <p>{vacancyItem.city}</p>
          </div>
        </div>

        <div className={style['dsave']}></div>
      </div>
    </div>
  );
}

export default Item;
