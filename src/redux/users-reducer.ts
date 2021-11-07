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

// type UsersPageType = {
//     users: Array<UsersType>
//     pageSize: number
//     totalUsersCount: number
//     currentPage: number
// }

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
export type setCurrentPageActionType = {
    type: "SET-CURRENT-PAGE"
    currentPage: number
}
export type setUsersTotalCountActionType = {
    type: "SET-TOTAL-USERS-COUNT"
    count: number
}

type ActionsUsersType =
    FollowActionType
    | UnfollowActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setUsersTotalCountActionType

export type InitialUsersStateType = typeof initialState

const initialState = {
    users: [] as Array<UsersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2
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
            return {...state, users: action.users}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.count}
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
export const setCurrentPageAC = (currentPage: number): setCurrentPageActionType => (
    {type: "SET-CURRENT-PAGE", currentPage} as const)
export const setUsersTotalCountAC = (totalUsersCount: number): setUsersTotalCountActionType => (
    {type: "SET-TOTAL-USERS-COUNT", count: totalUsersCount} as const)

