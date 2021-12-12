import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {authAPI} from "../api/api";

export type DataType = {
    userId: number
    email: string | null
    login: string | null
}

export type setUsersDataActionType = {
    type: "SET-USERS-DATA"
    data: DataType
}
export type setIsAuthDataActionType = {
    type: "SET-IS-AUTH"
    isAuth: boolean
}

type ActionsUsersType = setUsersDataActionType | setIsAuthDataActionType

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

const authReducer = (state: InitialAuthStateType = initialState, action: ActionsUsersType): InitialAuthStateType => {
    switch (action.type) {
        case "SET-USERS-DATA":
            return {...state, data: action.data}
        case "SET-IS-AUTH":
            return {...state, isAuth: action.isAuth}
        default:
            return state;
    }
}

export const setAuthUserDataAC = (userId: number, email: string, login: string): setUsersDataActionType => (
    {type: "SET-USERS-DATA", data: {userId, email, login}} as const)
export const setIsAuth = (isAuth: boolean) => ({type: "SET-IS-AUTH", isAuth} as const)

export const getAuthUserDataTC = (): ThunkAction<void, AppStateType, unknown, ActionsUsersType> => {
    return dispatch => {
        return authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    debugger
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserDataAC(id, email, login));
                    dispatch(setIsAuth(true));
                }
            });
    }
}

export const loginTC = (email: string | null, password: string | null, rememberMe: boolean, setStatus: (status: string) => void): ThunkAction<void, AppStateType, unknown, ActionsUsersType> => {
    return dispatch => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserDataTC());
                } else {
                    setStatus(response.data.messages[0])
                }
            });
    }
}

export const logoutTC = (): ThunkAction<void, AppStateType, unknown, ActionsUsersType> => {
    return dispatch => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(loginTC(null, null, false, (status: string) => ""));
                    dispatch(setIsAuth(false));
                }
            });
    }
}

export default authReducer;