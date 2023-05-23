import React, { useState } from 'react';
import style from './style.module.css';
import { Input, Button } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import storage from '../../storage/category.json';

function Filters({ setExpression }) {
  const [navigation, setNavigation] = useState({});

  function changeFiltersState(event) {
    setNavigation({ ...navigation, [event.target.name]: event.currentTarget.value });
  }

  return (
    <div className={style.wrapper}>
      <div className={style.flex}>
        <h2>Фильтры</h2>
        <p onClick={() => setExpression({})}>Сбросить все</p>
      </div>

      <div className={style.industry}>
        <h3>Отрасль</h3>
        <Input
          size="lg"
          name="industry"
          component="select"
          onChange={changeFiltersState}
          rightSection={<IconChevronDown />}
        >
          <option>Выберете отрасль</option>
          {storage.map((el, index) => (
            <option key={index}>{el.category}</option>
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

      <Button onClick={() => setExpression(navigation)} className={style.btn} size="lg">
        Применить
      </Button>
    </div>
  );
}

export default Filters;
