import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Pagination } from '@mantine/core';
import Item from './Item';
import storage from '../../storage/vacancy.json';

function List({ searchString, expression }) {
  const pageSizeRef = useRef(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [list, setList] = useState(storage);

  const filterVacancy = useCallback(() => {
    if (!searchString && !expression.industry) return storage;
    return storage.filter(({ vacancy, category }) =>
      vacancy.toLowerCase().includes(searchString.toLowerCase()) &&
      (!expression.industry || category === expression.industry)
    );
  }, [searchString, expression]);

  useEffect(() => {
    setList(filterVacancy());
  }, [filterVacancy]);

  useEffect(() => {
    setCurrentPage(1);
  }, [list, searchString, expression]);

  const paginatedList = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSizeRef.current;
    const endIndex = startIndex + pageSizeRef.current;
    return list.slice(startIndex, endIndex);
  }, [list, currentPage]);

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