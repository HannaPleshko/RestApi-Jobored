import React, { useState } from 'react';
import style from './style.module.css';
import { Input, Button } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import storage from '../../storage/category.json';

function Filters({ setExpression }) {
  const [navigation, setNavigation] = useState({});

  function changeFiltersState(event) {
    if (event.target.value === 'default') setNavigation({ ...navigation, [event.target.name]: '' });
    else setNavigation({ ...navigation, [event.target.name]: event.target.value });
  }

  function saveFilter() {
    setExpression(navigation);
  }

  function setDefault() {
    setExpression({})
  setNavigation({ industry: 'default' });
  }



  return (
    <div className={style.wrapper}>
      <div className={style.flex}>
        <h2>Фильтры</h2>
        <p onClick={setDefault}>Сбросить все</p>
      </div>

      <div className={style.industry}>
        <h3>Отрасль</h3>
        <Input
          size="lg"
          name="industry"
          component="select"
          value={navigation.industry || 'default'}
          onChange={changeFiltersState}
          rightSection={<IconChevronDown />}
        >
          <option value="default">Выберете отрасль</option>
          {storage.map((el, index) => (
            <option key={index} value={el.category}>{el.category}</option>
          ))}
        </Input>
      </div>

      <div className={style.salary}>
        <h3>Оклад</h3>

        <div className={style.selectors}>
          <Input
            size="lg"
            className={style['search-inp']}
            placeholder="От"
            name="salaryFrom"
            onChange={changeFiltersState}
          />
          <Input size="lg" className={style['search-inp']} placeholder="До" />
        </div>
      </div>

      <Button onClick={saveFilter} className={style.btn} size="lg">
        Применить
      </Button>
    </div>
  );
}

export default Filters;
