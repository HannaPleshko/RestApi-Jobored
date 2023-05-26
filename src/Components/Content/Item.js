import React, { useState, useEffect } from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';

function Item({ vacancyItem }) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const found = favorites.find(({ id }) => id === vacancyItem.id);
    setIsSaved(!!found);
  }, [vacancyItem.id]);

  const handleSaveToggle = () => {
    if (isSaved) {
      removeFromFavorites(vacancyItem.id);
    } else {
      addToFavorites(vacancyItem);
    }
  };

  const addToFavorites = (item) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const updatedFavorites = [...favorites, item];
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsSaved(true);
  };

  const removeFromFavorites = (id) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const updatedFavorites = favorites.filter((item) => item.id !== id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsSaved(false);
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

        <div onClick={handleSaveToggle} className={style[isSaved ? 'save' : 'dsave']}></div>
      </div>
    </div>
  );
}

export default Item;
