import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import Item from './Item';
import { Pagination } from '@mantine/core';

function Basket() {
    const pageSize = useRef(4);
    const [currentPage, setCurrentPage] = useState(1);
    const [storage, setStorage] = useState([]);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setStorage(favorites);
    }, [])

    const paginatedList = useMemo(() => {
        const startIndex = (currentPage - 1) * pageSize.current;
        const endIndex = startIndex + pageSize.current;
        return storage.slice(startIndex, endIndex);
    }, [storage, currentPage]);

    const handlePageChange = useCallback((page) => {
        setCurrentPage(page);
    }, []);

    return (
        <div>
            {paginatedList.map((el, index) => (
                <Item key={index} setStorage={setStorage} vacancyItem={el} storage={storage} />
            ))}

            <Pagination total={Math.ceil(storage.length / pageSize.current)} value={currentPage} onChange={handlePageChange} position="center" />
        </div>
    );
}

export default Basket;