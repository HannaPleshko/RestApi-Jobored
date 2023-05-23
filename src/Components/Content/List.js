import React, { useState, useEffect, useRef } from 'react';
import { Pagination } from '@mantine/core';
import Item from './Item';
import storage from '../../storage/vacancy.json';

function List({ searchString, expression }) {
  const [list, setList] = useState(storage);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSizeRef = useRef(4);

  const filterVacancy = () => {
    if (!searchString && !expression.industry) return storage;
    return storage.filter(({ vacancy, category }) =>
      vacancy.toLowerCase().includes(searchString.toLowerCase()) &&
      (!expression.industry || category === expression.industry)
    );
  };

  const paginatedList = filterVacancy().slice(
    (currentPage - 1) * pageSizeRef.current,
    currentPage * pageSizeRef.current
  );

  useEffect(() => {
    setList(filterVacancy());
  }, [searchString]);

  useEffect(() => {
    setCurrentPage(1);
  }, [list, searchString, expression]);

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
