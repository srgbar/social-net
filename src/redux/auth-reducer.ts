import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {authAPI, securityAPI} from "../api/api";

// types
export type DataType = {
    userId: number
    email: string | null
    login: string | null
}

type AuthReducerActionsType =
    | ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof setIsAuthAC>
    | ReturnType<typeof getCaptchaUrlSuccessAC>

export type InitialAuthStateType = typeof initialState

const initialState = {
    data: {
        userId: null as number | null,
        email: null,
        login: null
    } as DataType,
    isAuth: false,
    message: "",
    captchaUrl: null as string | null  // if null, then captcha is not required
}

export const authReducer = (state: InitialAuthStateType = initialState, action: AuthReducerActionsType): InitialAuthStateType => {
    switch (action.type) {
        case "AUTH/SET-USERS-DATA":
            return {...state, data: action.data}
        case "AUTH/SET-IS-AUTH":
            return {...state, isAuth: action.isAuth}
        case "AUTH/GET-CAPTCHA-URL-SUCCESS":
            return {...state, captchaUrl: action.captchaUrl}
        default:
            return state;
    }
}

// actions
export const setAuthUserDataAC = (userId: number, email: string, login: string) =>
    ({type: "AUTH/SET-USERS-DATA", data: {userId, email, login}} as const)
export const setIsAuthAC = (isAuth: boolean) =>
    ({type: "AUTH/SET-IS-AUTH", isAuth} as const)
export const getCaptchaUrlSuccessAC = (captchaUrl: string | null ) =>
    ({type: "AUTH/GET-CAPTCHA-URL-SUCCESS", captchaUrl} as const)

// thunks
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
                        captcha: string,
                        setStatus: (status: string) => void): ThunkAction<void, AppStateType, unknown, AuthReducerActionsType> => {
    return async dispatch => {
        const response = await authAPI.login(email, password, rememberMe, captcha);
        if (response.data.resultCode === 0) {
            //success, get auth data
            dispatch(getAuthUserDataTC());
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrlTC())
            }
            setStatus(response.data.messages[0])
        }
    }
}

export const getCaptchaUrlTC = (): ThunkAction<void, AppStateType, unknown, AuthReducerActionsType> => {
    return async dispatch => {
        const response = await securityAPI.getCaptchaUrl();
        const captcha = response.data.url;
        dispatch(getCaptchaUrlSuccessAC(captcha))
    }
}

export const logoutTC = (): ThunkAction<void, AppStateType, unknown, AuthReducerActionsType> => {
    return async dispatch => {
        const response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(loginTC(null, null, false, "null",(status: string) => ""));
            dispatch(setIsAuthAC(false));
        }
    }
}