import React from "react";
import s from "./Dialogs.module.css";
import {DialogsPropsType} from "./DialogsContainer";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import AddNewMessageForm from "../common/AddNewMessageForm/AddNewMessageForm";


const Dialogs = (props: DialogsPropsType) => {

    const state = props.dialogsPage;

    const dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    const messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id} id={m.id}/>);

    return (
        <div className={s.dialogs}>
            <div>
                <span className={s.dialogsItems}>{dialogsElements}</span>
                <span className={s.messages}>{messagesElements}</span>
            </div>
            <div className={s.formik}>
                <AddNewMessageForm
                    addPost={props.sendMessage}
                    placeholder={"Enter your message"}
                    titleOfButton={"Send"}
                />
            </div>
        </div>
    )
}

export default Dialogs;
