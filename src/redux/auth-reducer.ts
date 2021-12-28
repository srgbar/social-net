import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {authAPI} from "../api/api";

export type DataType = {
    userId: number
    email: string | null
    login: string | null
}

export type setUsersDataActionType = {
    type: "AUTH/SET-USERS-DATA"
    data: DataType
}
export type setIsAuthDataActionType = {
    type: "AUTH/SET-IS-AUTH"
    isAuth: boolean
}

type AuthReducerActionsType = setUsersDataActionType | setIsAuthDataActionType

export type InitialAuthStateType = typeof initialState

const initialState = {
    data: {
        userId: null as number | null,
        email: null,
        login: null
    } as DataType,
    isAuth: false,
    message: ""
}

const authReducer = (state: InitialAuthStateType = initialState, action: AuthReducerActionsType): InitialAuthStateType => {

    switch (action.type) {
        case "AUTH/SET-USERS-DATA":
            return {...state, data: action.data}
        case "AUTH/SET-IS-AUTH":
            return {...state, isAuth: action.isAuth}
        default:
            return state;
    }
}

export default authReducer;

export const setAuthUserDataAC = (userId: number, email: string, login: string): setUsersDataActionType => (
    {type: "AUTH/SET-USERS-DATA", data: {userId, email, login}} as const)
export const setIsAuthAC = (isAuth: boolean) => ({type: "AUTH/SET-IS-AUTH", isAuth} as const)


export const getAuthUserDataTC = (): ThunkAction<void, AppStateType, unknown, AuthReducerActionsType> => {
    return async dispatch => {
        const response = await authAPI.me();
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserDataAC(id, email, login));
            dispatch(setIsAuthAC(true));
        }
    }
}

export const loginTC = (email: string | null,
                        password: string | null,
                        rememberMe: boolean,
                        setStatus: (status: string) => void): ThunkAction<void, AppStateType, unknown, AuthReducerActionsType> => {
    return async dispatch => {
        const response = await authAPI.login(email, password, rememberMe);
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserDataTC());
        } else {
            setStatus(response.data.messages[0])
        }
    }
}

export const logoutTC = (): ThunkAction<void, AppStateType, unknown, AuthReducerActionsType> => {
    return async dispatch => {
        const response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(loginTC(null, null, false, (status: string) => ""));
            dispatch(setIsAuthAC(false));
        }
    }
}