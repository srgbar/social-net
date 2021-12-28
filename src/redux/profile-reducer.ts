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
    aboutMe: string
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

export type AddPostActionType = {
    type: "PROFILE-PAGE/ADD-POST"
    newMessageText: string
}
export type setUserProfileActionType = {
    type: "PROFILE-PAGE/SET-USER-PROFILE"
    profile: ProfilesType
}
export type setStatusActionType = {
    type: "PROFILE-PAGE/SET-STATUS"
    status: string
}
export type deletePostActionType = {
    type: "PROFILE-PAGE/DELETE-POST"
    postId: number
}
type ActionsProfileType = AddPostActionType | setUserProfileActionType | setStatusActionType | deletePostActionType;

export type InitialProfileStateType = typeof initialState

const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It\'s my first post", likesCount: 11},
        {id: 3, message: "Awesome!", likesCount: 5}
    ] as Array<PostsType>,
    profile: {
        photos: {
            small: "",
            large: ""
        },
        lookingForAJobDescription: "",
        lookingForAJob: false,
        aboutMe: "",
        fullName: "",
        contacts: {
            github: "",
            vk: "",
            facebook: "",
            instagram: "",
            twitter: "",
            website: "",
            youtube: "",
            mainLink: ""
        }
    } as ProfilesType,
    status: "",
};

const profileReducer = (state: InitialProfileStateType = initialState, action: ActionsProfileType): InitialProfileStateType => {
    switch (action.type) {
        case "PROFILE-PAGE/ADD-POST":
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.newMessageText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case "PROFILE-PAGE/SET-STATUS":
            return {
                ...state,
                status: action.status
            }
        case "PROFILE-PAGE/SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "PROFILE-PAGE/DELETE-POST":
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        default:
            return state;
    }
}

export default profileReducer;

export const addPostAC = (newMessageText: string): AddPostActionType =>
    ({type: "PROFILE-PAGE/ADD-POST", newMessageText} as const)
export const setUserProfileAC = (profile: ProfilesType): setUserProfileActionType => ({
    type: "PROFILE-PAGE/SET-USER-PROFILE", profile
} as const)
export const setStatusAC = (status: string): setStatusActionType => ({
    type: "PROFILE-PAGE/SET-STATUS", status
} as const)
export const deletePostAC = (postId: number): deletePostActionType => ({
    type: "PROFILE-PAGE/DELETE-POST", postId
} as const)


export const getUserProfileTC = (userId: number): ThunkAction<void, AppStateType, unknown, ActionsProfileType> => {
    return async dispatch => {
        const response = await userAPI.getProfile(userId)
        dispatch(setUserProfileAC(response.data));
    }
}

export const getStatusTC = (userId: number): ThunkAction<void, AppStateType, unknown, ActionsProfileType> => {
    return async dispatch => {
        const response = await profileAPI.getStatus(userId)
        dispatch(setStatusAC(response.data));
    }
}

export const updateStatusTC = (status: string): ThunkAction<void, AppStateType, unknown, ActionsProfileType> => {
    return async dispatch => {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0)
            dispatch(setStatusAC(status));
    }
}