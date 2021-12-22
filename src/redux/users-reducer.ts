import {userAPI} from "../api/api";
import {AppStateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";

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
export type toggleFollowingProgressActionType = {
    type: "TOGGLE-IS-FOLLOWING-PROGRESS"
    isFetching: boolean
    userId: number
}

type ActionsUsersType =
    FollowActionType
    | UnfollowActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setUsersTotalCountActionType
    | toggleIsFetchingActionType
    | toggleFollowingProgressActionType

export type InitialUsersStateType = typeof initialState

const initialState = {
    users: [] as Array<UsersType>,
    pageSize: 30,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>
}

const usersReducer = (state: InitialUsersStateType = initialState, action: ActionsUsersType): InitialUsersStateType => {
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
        case "TOGGLE-IS-FOLLOWING-PROGRESS":
                return {
                    ...state,
                    followingInProgress: action.isFetching
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id !== action.userId)
                }
        default:
            return state;
    }
}

export const followSuccessAC = (userId: number): FollowActionType => (
    {type: "FOLLOW", userId} as const)
export const unfollowSuccessAC = (userId: number): UnfollowActionType => (
    {type: "UNFOLLOW", userId} as const)
export const setUsersAC = (users: Array<UsersType>): setUsersActionType => (
    {type: "SET-USERS", users} as const)
export const setCurrentPageAC = (currentPage: number): setCurrentPageActionType => (
    {type: "SET-CURRENT-PAGE", currentPage} as const)
export const setTotalUsersCountAC = (totalUsersCount: number): setUsersTotalCountActionType => (
    {type: "SET-TOTAL-USERS-COUNT", count: totalUsersCount} as const)
export const toggleIsFetchingAC = (isFetching: boolean): toggleIsFetchingActionType => (
    {type: "TOGGLE-IS-FETCHING", isFetching} as const)
export const toggleFollowingProgressAC = (isFetching: boolean, userId: number): toggleFollowingProgressActionType => (
    {type: "TOGGLE-IS-FOLLOWING-PROGRESS", isFetching, userId} as const)


export const requestUsersTC = (page: number, pageSize: number)
    : ThunkAction<void, AppStateType, unknown, ActionsUsersType> => {
    return dispatch => {
        dispatch(toggleIsFetchingAC(true));
        dispatch(setCurrentPageAC(page));
        userAPI.getUsers(page, pageSize).then(data => {
            dispatch(toggleIsFetchingAC(false));
            dispatch(setUsersAC(data.items));
            dispatch(setTotalUsersCountAC(data.totalCount))
            dispatch(setCurrentPageAC(page))
        });
    }
}

export const followTC = (userId: number)
    : ThunkAction<void, AppStateType, unknown, ActionsUsersType> => {
    return dispatch => {
        dispatch(toggleFollowingProgressAC(true, userId));
        userAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccessAC(userId));
                }
                dispatch(toggleFollowingProgressAC(false, userId));
            });
    }
}

export const unfollowTC = (userId: number)
    : ThunkAction<void, AppStateType, unknown, ActionsUsersType> => {
    return dispatch => {
        dispatch(toggleFollowingProgressAC(true, userId));
        userAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccessAC(userId));
                }
                dispatch(toggleFollowingProgressAC(false, userId));
            });
    }
}

export default usersReducer;