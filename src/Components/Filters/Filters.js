import React, { useState } from 'react';
import style from './style.module.css';
import { Input, Button } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import storage from '../../storage/category.json';

function Filters({ setExpression }) {
  const [navigation, setNavigation] = useState({ industry: 'default', salaryFrom: '', salaryTo: '' });

  function changeFiltersState(event) {
    const { name, value } = event.target;
    setNavigation((prevNavigation) => ({
      ...prevNavigation,
      [name]: value === 'default' ? '' : value,
    }));
  }

  function setDefault() {
    setNavigation({ industry: 'default', salaryFrom: '', salaryTo: '' });
    setExpression({});
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
          value={navigation.industry}
          onChange={changeFiltersState}
          rightSection={<IconChevronDown />}
        >
          <option value="default">Выберите отрасль</option>
          {storage.map((el, index) => (
            <option key={index} value={el.category}>
              {el.category}
            </option>
          ))}
        </Input>
      </div>

      <div className={style.salary}>
        <h3>Оклад</h3>

        <div className={style.selectors}>
          <Input
            value={navigation.salaryFrom}
            type='number'
            size="lg"
            className={style['search-inp']}
            placeholder="От"
            name="salaryFrom"
            onChange={changeFiltersState}
          />
          <Input
            value={navigation.salaryTo}
            type='number'
            size="lg"
            className={style['search-inp']}
            placeholder="До"
            name="salaryTo"
            onChange={changeFiltersState}
          />
        </div>
      </div>

      <Button onClick={() => setExpression(navigation)} className={style.btn} size="lg">
        Применить
      </Button>
    </div>
  );
}

export default Filters;
