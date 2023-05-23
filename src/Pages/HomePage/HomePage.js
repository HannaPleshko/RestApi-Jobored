import React, { useState, useEffect } from 'react';
import List from '../../Components/Content/List';
import Search from '../../Components/Search/Search';
import style from './style.module.css';
import Header from '../../Components/Header/Header';
import Filters from '../../Components/Filters/Filters';

function HomePage() {
  const [searchString, setSearchString] = useState('');
  const [industry, setIndustry] = useState('Выберете отрасль...');

  useEffect(() => {
    console.log(industry);
  }, [industry])

  return (
    <div className={style['wrapper']}>
      <Header />

      <div className={style['preview']}>
        <Filters setIndustry={setIndustry} />

        <div className={style['content']}>
          <Search setSearchString={setSearchString} />
          <List searchString={searchString} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
