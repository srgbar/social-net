import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {profileAPI, userAPI} from "../api/api";

export type ProfilesType = {
    photos: {
        small: string,
        large: string
    }
    lookingForAJobDescription: string
    lookingForAJob: boolean
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

type ProfilePageType = {
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
export type setUserProfileActionType = {
    type: "SET-USER-PROFILE"
    profile: ProfilesType
}
export type setStatusActionType = {
    type: "SET-STATUS"
    status: string
}
type ActionsProfileType =
    AddPostActionType | UpdateNewPostTextActionType | setUserProfileActionType | setStatusActionType;

export type InitialProfileStateType = typeof initialState

const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It\'s my first post", likesCount: 11},
        {id: 3, message: "Awesome!", likesCount: 5}
    ] as Array<PostsType>,
    newPostText: "it-kamasutra.com",
    profile: {
        photos: {
            small: "https://c.tenor.com/SwqQl1FnAGgAAAAi/owl-blinking.gif",
            large: ""
        },
        lookingForAJobDescription: "I am study to React JS Developer",
        lookingForAJob: true,
        fullName: "Sergey B.",
        contacts: {
            github: "",
            vk: "",
            facebook: "",
            instagram: "https://www.instagram.com/",
            twitter: "",
            website: "",
            youtube: "",
            mainLink: ""
        }
    },
    status: "Step by step",
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
        case "SET-STATUS":
            return {
                ...state,
                status: action.status
            }
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        default:
            return state;
    }
}

export const addPostAC = (): AddPostActionType => ({type: "ADD-POST"} as const)
export const setUserProfile = (profile: ProfilesType): setUserProfileActionType => ({
    type: "SET-USER-PROFILE",
    profile
} as const)
export const setStatus = (status: string): setStatusActionType => ({
    type: "SET-STATUS",
    status
} as const)
export const updateNewPostTextAC = (newText: string): UpdateNewPostTextActionType => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText
} as const)

export const getUserProfile = (userId: string): ThunkAction<void, AppStateType, unknown, ActionsProfileType> => {
    return dispatch => {
        userAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
    }
}

export const getStatus = (userId: string): ThunkAction<void, AppStateType, unknown, ActionsProfileType> => {
    return dispatch => {
        profileAPI.getStatus(userId).then(response => {
            debugger;
            dispatch(setStatus(response.data));
        });
    }
}

export const updateStatus = (status: string): ThunkAction<void, AppStateType, unknown, ActionsProfileType> => {
    return dispatch => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0)
            dispatch(setStatus(status));
        });
    }
}

