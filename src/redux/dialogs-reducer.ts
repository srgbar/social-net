// export type DialogsType = {
//     id: number
//     name: string
// }
export type MessagesType = {
    id: number
    name: string
    message: string
}
export type DialogsPageType = {
    // dialogs: Array<DialogsType>
    // dialogs: Array<MessagesType>
    messages: Array<MessagesType>
}

export type SendMessageActionType = {
    type: "DIALOGS-PAGE/SEND-MESSAGE"
    newMessageBody: string
}

type ActionsDialogsType = SendMessageActionType

export type InitialDialogsStateType = typeof initialState

const initialState = {
    // dialogs: [
    //     {id: 1, name: "Dimych"},
    //     {id: 2, name: "Andrew"},
    //     {id: 3, name: "Pasha"},
    //     {id: 4, name: "Olga"}
    // ] as Array<DialogsType>,
    messages: [
        {id: 1, name: "Dimych", message: "Hello, my friend!"},
        {id: 2, name: "Andrew", message: `Have you seen the new "Spider-Man: No Way Home" yet?`},
        {id: 3, name: "Pasha", message: "What will you do during the winter holidays? Come with us to the Altai! Will be cool!"},
        {id: 4, name: "Olga", message: "How are you learning Javascript?"},
    ] as Array<MessagesType>,
}

const dialogsReducer = (state: InitialDialogsStateType = initialState, action: ActionsDialogsType): InitialDialogsStateType => {
    switch (action.type) {
        case "DIALOGS-PAGE/SEND-MESSAGE":
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 5, name: "Visitor" ,message: body}]
            };
        default:
            return state;
    }
}

export default dialogsReducer;

export const sendMessageAC = (newMessageBody: string): SendMessageActionType => (
    {type: "DIALOGS-PAGE/SEND-MESSAGE", newMessageBody} as const)


