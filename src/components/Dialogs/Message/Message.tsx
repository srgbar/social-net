import React from "react";
import s from "./../Dialogs.module.css";
import {MessagesType} from "../../../redux/dialogs-reducer";

export const Message = (props: MessagesType) => {
    return <div /*className={s.dialog}*/ style={{margin: 5}}>{props.message}</div>
}
