import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


const Dialogs = (props: DialogsPageType) => {

    let dialogsElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map((m) => <Message message={m.message} id={m.id}/>);

    return (
        <div className={s.dialogs}>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add message</button>
                </div>
                <div>
                    <div className={s.dialogsItems}>
                        {dialogsElements}
                    </div>
                    <div className={s.messages}>
                        {messagesElements}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs

