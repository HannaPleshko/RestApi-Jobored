import React, { useState, useEffect } from 'react';
import List from '../../Components/Content/List';
import Search from '../../Components/Search/Search';
import style from './style.module.css';
import Header from '../../Components/Header/Header';
import Filters from '../../Components/Filters/Filters';

function HomePage() {
  const [searchString, setSearchString] = useState('');
  const [expression, setExpression] = useState({});

  useEffect(() => {
    console.log(expression);
  }, [expression])

  return (
    <div className={style.wrapper}>
      <Header />

      <div className={style.preview}>
        <Filters setExpression={setExpression} />

        <div className={style.content}>
          <Search setSearchString={setSearchString} />
          <List expression={expression} searchString={searchString} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
