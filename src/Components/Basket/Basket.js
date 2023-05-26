import React, { useEffect } from 'react';
import style from './style.module.css';

function Basket() {

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        console.log(favorites);
    }, [])

    return (
        <></>
    )
}

export default Basket;