import {ActionsTypes, DialogsPageType} from "./state";

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {

    switch (action.type) {
        case SEND_MESSAGE:
            const body = state.newMessageBody;
            state.messages.push({id: 6, message: body});
            state.newMessageBody = "";
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }
}

export const sendMessageAC = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyAC = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)

export default dialogsReducer;

