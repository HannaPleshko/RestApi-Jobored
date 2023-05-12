import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';

function Header() {
  return (
    <div className={style['wrapper']}>
      <div className={style['flex']}>
        <div className={style['logo']}></div>

        <div className={style['nav']}>
          <p>
            <Link to={'/'}>Поиск Вакансий</Link>
          </p>
          <p>
            <Link to={'/save'}> Избранное</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
