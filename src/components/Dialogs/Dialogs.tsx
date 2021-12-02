import React from "react";
import s from "./Dialogs.module.css";
import {DialogsPropsType, MapDispatchPropsType} from "./DialogsContainer";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {Field, Form, Formik} from "formik";

type FormDataMessageType = {
    newMessageBody: string
}

const Dialogs = (props: DialogsPropsType) => {

    const state = props.dialogsPage;

    const dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    const messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id} id={m.id}/>);
    // const newMessageBody = state.newMessageBody;

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>{dialogsElements}</div>
                <div className={s.messages}>{messagesElements}</div>
            </div>
            <AddMessageForm sendMessage={props.sendMessage}/>
        </div>
    )
}

const AddMessageForm = (props: MapDispatchPropsType) => {
    const submit = (values: FormDataMessageType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        setSubmitting(false);
        props.sendMessage(values.newMessageBody)
    }
    return (
        <div>
            <Formik
                initialValues={{newMessageBody: ''}}
                onSubmit={submit}>
                {({isSubmitting}) => (
                    <Form>
                        <div className={s.groopOfInputAndButton}>
                            <Field name={"newMessageBody"}
                                   placeholder={"Enter your message"}
                                   component={"textarea"}
                                   className={s.textareaAndButton}/>
                            <button type="submit"
                                    className={s.textareaAndButton}>Send
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Dialogs;
