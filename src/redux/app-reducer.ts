import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {getAuthUserDataTC} from "./auth-reducer";

export type initializedActionType = {
    type: "INITIALIZED-SUCCESS"
}

type ActionsUsersType = initializedActionType

export type InitialAppStateType = typeof initialState

const initialState = {
    initialized: false
}

const appReducer = (state: InitialAppStateType = initialState, action: ActionsUsersType): InitialAppStateType => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {...state, initialized: true}
        default:
            return state;
    }
}

export const initializedSuccessAC = (): initializedActionType => ({type: "INITIALIZED-SUCCESS"} as const)

export const initializedAppTC = (): ThunkAction<void, AppStateType, unknown, ActionsUsersType> => {
    return dispatch => {
        let promise = dispatch(getAuthUserDataTC());
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccessAC());
            })
    }
}

export default appReducer;