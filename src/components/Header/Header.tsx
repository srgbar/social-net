import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {HeaderContainerPropsType} from "./HeaderContainer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobeAsia} from "@fortawesome/free-solid-svg-icons/faGlobeAsia";
import {faGlobeAfrica} from "@fortawesome/free-solid-svg-icons/faGlobeAfrica";
import {faGlobeAmericas} from "@fortawesome/free-solid-svg-icons/faGlobeAmericas";

const Header = (props: HeaderContainerPropsType) => {
    return <header className={s.header}>
        <div className={s.container}>
            <div className={s.logo}>
                <FontAwesomeIcon icon={faGlobeAmericas} style={{marginLeft: 10}}/>
                <FontAwesomeIcon icon={faGlobeAfrica} style={{marginLeft: 10}}/>
                <FontAwesomeIcon icon={faGlobeAsia} style={{marginLeft: 10}}/>
            </div>
            <div className={s.title}>
                Social Network
            </div>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>
                        <span className={s.login}>{props.login}</span>
                        <button onClick={props.logoutTC} className={s.button}>Log out</button>
                    </div>
                    : <div>
                        <NavLink to={"/login"}>Login</NavLink>
                    </div>}
            </div>
        </div>
    </header>
}

export default Header;