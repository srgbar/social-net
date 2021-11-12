import React from 'react';
import s from './Header.module.css';
import cub from "../../assets/images/cub.jpg";

export const Header = () => {
    return <header className={s.header}>
        <img src={cub}/>
    </header>
}