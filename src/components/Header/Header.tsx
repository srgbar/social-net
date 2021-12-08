import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {HeaderContainerPropsType} from "./HeaderContainer";
import logo from "../../assets/images/black-map.png"

const Header = (props: HeaderContainerPropsType) => {
    debugger
    return <header className={s.header}>
        {/*<img src={cub}/>*/}
        <img src={logo}/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login}<button onClick={props.logout} className={s.button}>Log out</button>
                </div>
                : <NavLink to={"/login"}>Login</NavLink>}
        </div>
    </header>
}

export default Header;