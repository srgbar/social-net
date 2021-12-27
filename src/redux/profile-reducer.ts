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
    type: "ADD-POST"
    newMessageText: string
}
export type setUserProfileActionType = {
    type: "SET-USER-PROFILE"
    profile: ProfilesType
}
export type setStatusActionType = {
    type: "SET-STATUS"
    status: string
}
export type deletePostActionType = {
    type: "DELETE-POST"
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
            // small: "https://c.tenor.com/SwqQl1FnAGgAAAAi/owl-blinking.gif",
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
    },
    status: "",
};

const profileReducer = (state: InitialProfileStateType = initialState, action: ActionsProfileType): InitialProfileStateType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.newMessageText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case "SET-STATUS":
            return {
                ...state,
                status: action.status
            }
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "DELETE-POST":
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        default:
            return state;
    }
}

export const addPostAC = (newMessageText: string): AddPostActionType =>
    ({type: "ADD-POST", newMessageText} as const)
export const setUserProfile = (profile: ProfilesType): setUserProfileActionType => ({
    type: "SET-USER-PROFILE", profile
} as const)
export const setStatus = (status: string): setStatusActionType => ({
    type: "SET-STATUS", status
} as const)
export const deletePostAC = (postId: number): deletePostActionType => ({
    type: "DELETE-POST", postId
} as const)


// Thunks
export const getUserProfile = (userId: number): ThunkAction<void, AppStateType, unknown, ActionsProfileType> => {
    return dispatch => {
        userAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
    }
}
export const getStatus = (userId: number): ThunkAction<void, AppStateType, unknown, ActionsProfileType> => {
    return dispatch => {
        profileAPI.getStatus(userId).then(response => {
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

export default profileReducer;