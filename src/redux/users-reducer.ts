export type UsersType = {
    id: number
    photos: {
        small: string,
        large: string
    }
    followed: boolean
    name: string
    status: string
    location: { city: string, country: string }
}

export type FollowActionType = {
    type: "FOLLOW"
    userId: number
}
export type UnfollowActionType = {
    type: "UNFOLLOW"
    userId: number
}
export type setUsersActionType = {
    type: "SET-USERS"
    users: Array<UsersType>
}

type ActionsUsersType = FollowActionType | UnfollowActionType | setUsersActionType

export type InitialUsersStateType = typeof initialState

const initialState = {
    users: [] as Array<UsersType>,
}

export const usersReducer = (state: InitialUsersStateType = initialState, action: ActionsUsersType): InitialUsersStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case "SET-USERS": {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

export const followAC = (userId: number): FollowActionType => (
    {type: "FOLLOW", userId} as const)
export const unfollowAC = (userId: number): UnfollowActionType => (
    {type: "UNFOLLOW", userId} as const)
export const setUsersAC = (users: Array<UsersType>): setUsersActionType => (
    {type: "SET-USERS", users} as const)
