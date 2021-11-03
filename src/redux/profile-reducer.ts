export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type AddPostActionType = {
    type: "ADD-POST"
}
export type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
type ActionsProfileType = AddPostActionType | UpdateNewPostTextActionType;

export type InitialProfileStateType = typeof initialState

const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It\'s my first post", likesCount: 11},
        {id: 3, message: "Blabla", likesCount: 3},
        {id: 4, message: "Dada", likesCount: 100500}
    ] as Array<PostsType>,
    newPostText: "it-kamasutra.com"
};

export const profileReducer = (state: InitialProfileStateType = initialState, action: ActionsProfileType): InitialProfileStateType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        case "UPDATE-NEW-POST-TEXT":
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state;
    }
}

export const addPostAC = (): AddPostActionType => ({type: "ADD-POST"} as const)
export const updateNewPostTextAC = (newText: string): UpdateNewPostTextActionType => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText
} as const)
