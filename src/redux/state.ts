import {rerenderEntireTree} from "../render";

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
    addPostCallback: (postText: string) => void
}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

let state = {
    profilePage: {
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
}

export const addPost = (postText: string) => {
    const newPost: PostsType = {
        id: new Date().getTime(),
        message: postText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree();
}

export default state;