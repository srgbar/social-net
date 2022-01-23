import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {MessagesType} from "../../../redux/dialogs-reducer";

export const DialogItem = (props: MessagesType) => {
    const path = "/dialogs/" + props.id;

    return <div /*className={s.dialog + ' ' + s.active}*/ style={{margin: 5}}>
        <NavLink to={path} style={{color: "chocolate"}}>{props.name}</NavLink>
    </div>
}
