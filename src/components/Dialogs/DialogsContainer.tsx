import React from "react";
import {DialogsPageType, sendMessageAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}
export type MapDispatchPropsType = {
    sendMessage: (newMessageBody: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: (newMessageBody) => {dispatch(sendMessageAC(newMessageBody))}
    }
}
export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(Dialogs)

