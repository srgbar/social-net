import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {getAuthUserDataTC} from "./auth-reducer";

// types
type ActionsUsersType = ReturnType<typeof initializedSuccessAC>

export type InitialAppStateType = typeof initialState

const initialState = {
    initialized: false
}

export const appReducer = (state: InitialAppStateType = initialState, action: ActionsUsersType): InitialAppStateType => {
    switch (action.type) {
        case "APP/INITIALIZED-SUCCESS":
            return {...state, initialized: true}
        default:
            return state;
    }
}

// actions
export const initializedSuccessAC = () => ({type: "APP/INITIALIZED-SUCCESS"} as const)

// thunks
export const initializedAppTC = (): ThunkAction<void, AppStateType, unknown, ActionsUsersType> => {
    return dispatch => {
        let promise = dispatch(getAuthUserDataTC());
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccessAC());
            })
    }
}