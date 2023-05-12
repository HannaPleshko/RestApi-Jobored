import React, { useState } from 'react';
import List from '../../Components/Content/List';
import Search from '../../Components/Search/Search';
import style from './style.module.css';
import Header from '../../Components/Header/Header';
import Filters from '../../Components/Filters/Filters';

function HomePage() {
  const [searchString, setSearchString] = useState('');

  return (
    <div className={style['wrapper']}>
      <Header />

      <div className={style['preview']}>
        <Filters />

        <div className={style['content']}>
          <Search setSearchString={setSearchString} />
          <List searchString={searchString} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
