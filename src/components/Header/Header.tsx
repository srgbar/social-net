import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {MapStatePropsType} from "./HeaderContainer";
import logo from "../../assets/images/black-map.png"

export const Header = (props: MapStatePropsType) => {
    return <header className={s.header}>
        {/*<img src={cub}/>*/}
        <img src={logo}/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>
                    <div>{props.login}</div>
                </div>
                : <NavLink to={"/login"}>Login</NavLink>}
        </div>
    </header>
}