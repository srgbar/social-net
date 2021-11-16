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
export type setCurrentPageActionType = {
    type: "SET-CURRENT-PAGE"
    currentPage: number
}
export type setUsersTotalCountActionType = {
    type: "SET-TOTAL-USERS-COUNT"
    count: number
}
export type toggleIsFetchingActionType = {
    type: "TOGGLE-IS-FETCHING"
    isFetching: boolean
}

type ActionsUsersType =
    FollowActionType
    | UnfollowActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setUsersTotalCountActionType
    | toggleIsFetchingActionType

export type InitialUsersStateType = typeof initialState

const initialState = {
    users: [] as Array<UsersType>,
    pageSize: 30,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export const follow = (userId: number): FollowActionType => (
    {type: "FOLLOW", userId} as const)
export const unfollow = (userId: number): UnfollowActionType => (
    {type: "UNFOLLOW", userId} as const)
export const setUsers = (users: Array<UsersType>): setUsersActionType => (
    {type: "SET-USERS", users} as const)
export const setCurrentPage = (currentPage: number): setCurrentPageActionType => (
    {type: "SET-CURRENT-PAGE", currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number): setUsersTotalCountActionType => (
    {type: "SET-TOTAL-USERS-COUNT", count: totalUsersCount} as const)
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => (
    {type: "TOGGLE-IS-FETCHING", isFetching} as const)

