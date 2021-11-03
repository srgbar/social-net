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
    newMessageBody: string
}

export type SendMessageActionType = {
    type: "SEND-MESSAGE"
}
export type UpdateNewMessageBodyActionType = {
    type: "UPDATE-NEW-MESSAGE-BODY"
    body: string
}
type ActionsDialogsType = SendMessageActionType | UpdateNewMessageBodyActionType;

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
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"}
    ] as Array<MessagesType>,
    newMessageBody: ""
}

export const dialogsReducer = (state: InitialDialogsStateType = initialState, action: ActionsDialogsType): InitialDialogsStateType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            return {
                ...state,
                newMessageBody: action.body
            };
        case "SEND-MESSAGE":
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageAC = (): SendMessageActionType => ({type: "SEND-MESSAGE"} as const)
export const updateNewMessageBodyAC = (body: string): UpdateNewMessageBodyActionType => ({
    type: "UPDATE-NEW-MESSAGE-BODY",
    body
} as const)