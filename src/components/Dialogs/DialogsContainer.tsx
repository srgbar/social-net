import React from "react";
import {DialogsPageType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {Dialogs} from "./Dialogs";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
    // dialogs: Array<DialogsType>
    // messages: Array<MessagesType>
    // newMessageBody: string
}

type MapDispatchPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
        // dialogs: state.dialogsPage.dialogs,
        // messages: state.dialogsPage.messages,
        // newMessageBody: state.dialogsPage.newMessageBody
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC());
        },
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body));
        }
    }
}

export const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

