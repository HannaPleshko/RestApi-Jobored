import React, { useState } from 'react';
import style from './style.module.css';
import { NativeSelect, Input, Button } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import storage from '../../storage/category.json';

function Filters({ setExpression }) {
  const [industry, setIndustry] = useState('Выберете отрасль...');

  function handleApplyFilters() {
    setExpression({ industry })
  }

  return (
    <div className={style['wrapper']}>
      <div className={style['flex']}>
        <h2>Фильтры</h2>
        <p>Сбросить все</p>
      </div>

      <div className={style['industry']}>
        <h3>Отрасль</h3>
        <NativeSelect
          size="lg"
          placeholder="Выберете отрасль"
          data={storage.map((el) => el.category)}
          onChange={(event) => setIndustry(event.currentTarget.value)}
          rightSection={<IconChevronDown />}
        />
      </div>

      <div className={style['salary']}>
        <h3>Оклад</h3>

        <div className={style['selectors']}>
          <Input size="lg" className={style['search-inp']} placeholder="От" />
          <Input size="lg" className={style['search-inp']} placeholder="До" />
        </div>
      </div>

      <Button
        onClick={handleApplyFilters}
        className={style['btn']} size="lg">
        Применить
      </Button>
    </div>
  );
}

export default Filters;
