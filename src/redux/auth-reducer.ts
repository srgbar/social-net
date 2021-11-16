export type DataType = {
    id: number
    email: string
    login: string
}

type AuthType = {
    data: DataType
    isAuth: boolean
}

export type setUsersDataActionType = {
    type: "SET-USERS-DATA"
    data: DataType
}

type ActionsUsersType = setUsersDataActionType

export type InitialAuthStateType = typeof initialState

const initialState = {
    data: {
        id: 0,
        email: "",
        login: ""
    },
    isAuth: false
}

export const authReducer = (state: InitialAuthStateType = initialState, action: ActionsUsersType): InitialAuthStateType => {
    switch (action.type) {
        case "SET-USERS-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}

export const setAuthUserData = (data: DataType): setUsersDataActionType => (
    {type: "SET-USERS-DATA", data} as const)

