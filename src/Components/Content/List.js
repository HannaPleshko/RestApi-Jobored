import React, { useState, useEffect, useRef } from 'react';
import { Pagination } from '@mantine/core';
import Item from './Item';
import storage from '../../storage/storage.json';

function List({ searchString }) {
  const [list, setList] = useState(storage);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSizeRef = useRef(4);

  const filterVacancy = () => {
    if (!searchString) return storage;
    return storage.filter(({ vacancy }) => vacancy.toLowerCase().includes(searchString.toLowerCase()));
  };

  const paginatedList = filterVacancy().slice((currentPage - 1) * pageSizeRef.current, currentPage * pageSizeRef.current);

  useEffect(() => {
    setList(filterVacancy());
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
