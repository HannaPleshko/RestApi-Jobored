import React from 'react';
import Header from '../../Components/Header/Header';
import Basket from '../../Components/Basket/Basket';
import style from './style.module.css';

function BasketPage() {
  return (
    <div className={style.wrapper}>
      <Header />

      <Basket />
    </div>
  );
}

export default BasketPage;
