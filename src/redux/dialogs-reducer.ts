export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type SendMessageActionType = {
    type: "SEND-MESSAGE"
    newMessageBody: string
}

type ActionsDialogsType = SendMessageActionType

export type InitialDialogsStateType = typeof initialState

const initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrew"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"}
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo"},
    ] as Array<MessagesType>,
}

const dialogsReducer = (state: InitialDialogsStateType = initialState, action: ActionsDialogsType): InitialDialogsStateType => {
    switch (action.type) {
        case "SEND-MESSAGE":
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageAC = (newMessageBody: string): SendMessageActionType => (
    {type: "SEND-MESSAGE", newMessageBody} as const)

export default dialogsReducer;
