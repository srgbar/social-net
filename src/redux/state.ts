export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void   // _onChange в Типизации соц сети

    subscribe: (observer: () => void) => void
    getState: () => RootStateType

    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>

export const addPostAC = (postText: string) => ({type: "ADD-POST", postText} as const)
export const updateNewPostTextAC = (newText: string) => ({type: "UPDATE-NEW-POST-TEXT", newText} as const)

export type DispatchType = {
    dispatch: (action: ActionsTypes) => void
}

const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: "it-kamasutra.com",
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It\'s my first post", likesCount: 11},
                {id: 3, message: "Blabla", likesCount: 3},
                {id: 4, message: "Dada", likesCount: 100500}
            ]
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrew"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Viktor"},
                {id: 6, name: "Valera"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your it-kamasutra?"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"}
            ]
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("State changed");
    },

    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer; // pattern observer
    },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._callSubscriber();
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        }
    }
}

export default store;
// window.store = store;