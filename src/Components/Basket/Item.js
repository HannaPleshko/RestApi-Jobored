import React, { useState, useEffect } from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';
import { IconTrash } from '@tabler/icons-react';

function Item({ vacancyItem, setStorage, storage }) {

  const handleSaveToggle = () => {
    const updatedFavorites = storage.filter(el => el.id != vacancyItem.id)
    setStorage(updatedFavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className={style['wrapper']}>
      <div className={style['item']}>
        <Link to={`/vacancy/${vacancyItem.id}`}>
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
        </Link>

        <IconTrash onClick={handleSaveToggle} />
      </div>
    </div>
  );
}

export default Item;
