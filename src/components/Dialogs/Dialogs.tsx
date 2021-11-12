import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import {DialogsPropsType} from "./DialogsContainer";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import netLogo from "../../assets/images/netLogo.jpg";


export const Dialogs = (props: DialogsPropsType) => {

    const state = props.dialogsPage;

    const dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    const messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id} id={m.id}/>);
    const newMessageBody = state.newMessageBody;

    const onSendMessageClick = () => {
        props.sendMessage();
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <div><textarea value={newMessageBody}
                                       onChange={onNewMessageChange}
                                       placeholder="Enter your message"
                                       style={{background: "#f5f6ea", borderRadius: 7}}
                        />
                        </div>
                        <div>
                            <button onClick={onSendMessageClick} style={{background: "#f5f6ea", borderRadius: 7}}>Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
