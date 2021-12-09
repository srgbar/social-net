import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {authAPI} from "../api/api";

export type DataType = {
    userId: string
    email: string
    login: string
    isAuth: boolean
}

export type setUsersDataActionType = {
    type: "SET-USERS-DATA"
    payload: DataType
}

type ActionsUsersType = setUsersDataActionType

export type InitialAuthStateType = typeof initialState

const initialState = {
    userId: "20199",
    email: "",
    login: "",
    isAuth: false,
    message: ""
}

export const authReducer = (state: InitialAuthStateType = initialState, action: ActionsUsersType): InitialAuthStateType => {
    switch (action.type) {
        case "SET-USERS-DATA":
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export const setAuthUserData = (userId: string, email: string, login: string, isAuth: boolean): setUsersDataActionType => (
    {type: "SET-USERS-DATA", payload: {userId, email, login, isAuth}} as const)

export const getAuthUserData = (): ThunkAction<void, AppStateType, unknown, ActionsUsersType> => {
    return dispatch => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {userId, email, login} = response.data.data;
                    dispatch(setAuthUserData(userId, email, login, true));
                }
            });
    }
}

export const login = (email: string, password: string, rememberMe: boolean, setStatus: (status: string) => void): ThunkAction<void, AppStateType, unknown, ActionsUsersType> => {
    return dispatch => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData());
                } else {
                    setStatus(response.data.messages[0])
                }
            });
    }
}

export const logout = (): ThunkAction<void, AppStateType, unknown, ActionsUsersType> => {
    return dispatch => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData("", "", "", false));
                }
            });
    }
}