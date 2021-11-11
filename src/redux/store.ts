import {addPostAC, profileReducer, updateNewPostTextAC} from "./profile-reducer";
import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

type DialogsType = {
    id: number
    name: string
}
type MessagesType = {
    id: number
    message: string
}
type PostsType = {
    id: number
    message: string
    likesCount: number
}

type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}
type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

type SidebarType = {}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void   // _onChange в Типизации соц сети

    subscribe: (observer: () => void) => void
    getState: () => RootStateType

    _dispatch: (action: ActionsTypes) => void
}

type ActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof sendMessageAC> |
    ReturnType<typeof updateNewMessageBodyAC>

// const store: StoreType = {
//     _state: {
//         profilePage: {
//             newPostText: "it-kamasutra.com",
//             posts: [
//                 {id: 1, message: "Hi, how are you?", likesCount: 12},
//                 {id: 2, message: "It\'s my first post", likesCount: 11},
//                 {id: 3, message: "Blabla", likesCount: 3},
//                 {id: 4, message: "Dada", likesCount: 100500}
//             ]
//         },
//         dialogsPage: {
//             newMessageBody: "",
//             dialogs: [
//                 {id: 1, name: "Dimych"},
//                 {id: 2, name: "Andrew"},
//                 {id: 3, name: "Sveta"},
//                 {id: 4, name: "Sasha"},
//                 {id: 5, name: "Viktor"},
//                 {id: 6, name: "Valera"}
//             ],
//             messages: [
//                 {id: 1, message: "Hi"},
//                 {id: 2, message: "How is your it-kamasutra?"},
//                 {id: 3, message: "Yo"},
//                 {id: 4, message: "Yo"},
//                 {id: 5, message: "Yo"}
//             ]
//         },
//         sidebar: {}
//     },
//     _callSubscriber() {
//         console.log("State changed");
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer: () => void) {
//         this._callSubscriber = observer; // pattern observer
//     },
//     _dispatch(action: any) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//
//         this._callSubscriber();
//     }
// }

// @ts-ignore
// window.store = store;