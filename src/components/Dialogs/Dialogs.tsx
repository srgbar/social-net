import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType, DispatchType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/state";


const Dialogs = (props: DialogsPageType & DispatchType) => {

    const dialogsElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);
    const messagesElements = props.messages.map((m) => <Message message={m.message} id={m.id}/>);

    const onSendMessageClick = () => {
        props.dispatch(sendMessageAC());
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.target.value;
        props.dispatch(updateNewMessageBodyAC(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={props.newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder="Enter your message"/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs

