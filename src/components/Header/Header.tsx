import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {HeaderContainerPropsType} from "./HeaderContainer";
import {faDragon} from "@fortawesome/free-solid-svg-icons/faDragon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logo from "../../assets/images/black-map.png";

const Header = (props: HeaderContainerPropsType) => {
    return <header className={s.header}>
        <div className={s.container}>
            <img src={logo}/>
            <div className={s.title}>Social Network<FontAwesomeIcon icon={faDragon} style={{marginLeft: 10}}/>
                {/*<FontAwesomeIcon icon={faAtom} style={{marginLeft: 10}}/>*/}
            </div>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}
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