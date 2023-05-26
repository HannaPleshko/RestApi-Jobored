import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import style from './style.module.css';
import { useParams } from 'react-router-dom';
import storage from '../../storage/vacancy.json';
import Vacancy from '../../Components/Vacancy/Vacancy';

function VacancyPage() {
  const [vacancy, setVacancy] = useState();
  const { id } = useParams();

  useEffect(() => {
    const found = storage.find((item) => item.id == id);
    setVacancy(found);
  }, []);

  return (
    <div className={style.wrapper}>
      <Header />

      {vacancy && <Vacancy vacancy={vacancy} />}
    </div>
  );
}

export default VacancyPage;
