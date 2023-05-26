import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Pagination } from '@mantine/core';
import Item from './Item';
import storage from '../../storage/vacancy.json';

function List({ searchString, expression }) {
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredStorage, setFilteredStorage] = useState(storage);

  const filterVacancy = useCallback(() => {
    if (!searchString && expression.industry === 'default' && !expression.salaryFrom && !expression.salaryTo) {
      return storage;
    }

    return storage.filter(({ vacancy, category, salary }) => {
      const filterValueTo = parseInt(expression.salaryTo);
      const filterSalary = parseInt(salary.split(' ')[2]);
      const filterValueFrom = parseInt(expression.salaryFrom);

      return (
        vacancy.toLowerCase().includes(searchString.toLowerCase()) &&
        (expression.industry === 'default' || category === expression.industry) &&
        (!expression.salaryFrom || (filterSalary >= filterValueFrom)) &&
        (!expression.salaryTo || (filterSalary <= filterValueTo))
      );
    });
  }, [searchString, expression]);

  useEffect(() => {
    setFilteredStorage(filterVacancy());
  }, [searchString, expression]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredStorage, searchString, expression]);

  const paginatedList = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredStorage.slice(startIndex, endIndex);
  }, [filteredStorage, currentPage]);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  return (
    <div>
      {paginatedList.map((el, index) => (
        <Item key={index} vacancyItem={el} />
      ))}

      <Pagination
        total={Math.ceil(filteredStorage.length / pageSize)}
        value={currentPage}
        onChange={handlePageChange}
        position="center"
      />
    </div>
  );
}

export default List;