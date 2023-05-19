import React, { useState, useEffect, useRef } from 'react';
import { Pagination } from '@mantine/core';
import Item from './Item';
import storage from '../../storage/storage.json';
import axios from 'axios';

function List({ searchString }) {
  const [list, setList] = useState(storage);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSizeRef = useRef(4);

  const [accessToken, setAccessToken] = useState('');

  const filterVacancy = () => {
    if (!searchString) return storage;
    return storage.filter(({ vacancy }) =>
      vacancy.toLowerCase().includes(searchString.toLowerCase())
    );
  };

  const paginatedList = filterVacancy().slice(
    (currentPage - 1) * pageSizeRef.current,
    currentPage * pageSizeRef.current
  );

  useEffect(() => {
    const performAuthorization = async () => {
      try {
        const response = await axios.post(
          'https://startup-summer-2023-proxy.onrender.com/2.0/oauth2/password',
          {
            login: 'sergei.stralenia@gmail.com',
            password: 'paralect123',
            client_id: '2356',
            client_secret:
              'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
            hr: '0'
          },
          {
            headers: {
              'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
            }
          }
        );

        const accessToken = response.data.access_token;
        setAccessToken(accessToken);
        console.log(accessToken);
      } catch (error) {
        console.error('Ошибка авторизации', error);
      }
    };

    const fetchVacancies = async () => {
      try {
        const response = await axios.get(
          'https://startup-summer-2023-proxy.onrender.com/2.0/vacancies',
          {
            headers: {
              'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
              'X-Api-App-Id': accessToken
            }
          }
        );

        const vacancies = response.data;
        console.log(vacancies);
      } catch (error) {
        console.error('Ошибка при получении вакансий', error);
      }
    };

    performAuthorization();
    fetchVacancies();
  }, []);

  useEffect(() => {
    setList(filterVacancy());
    setCurrentPage(1)
  }, [searchString]);

  return (
    <div>
      {paginatedList.map((el, index) => (
        <Item key={index} vacancyItem={el} />
      ))}
      <Pagination
        total={Math.ceil(list.length / pageSizeRef.current)}
        value={currentPage}
        onChange={(page) => setCurrentPage(page)}
        position="center"
      />
    </div>
  );
}

export default List;
