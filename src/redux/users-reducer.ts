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
                        : state.followingInProgress.filter(id => id != action.userId)
                }
        default:
            return state;
    }
}

export const followSuccess = (userId: number): FollowActionType => (
    {type: "FOLLOW", userId} as const)
export const unfollowSuccess = (userId: number): UnfollowActionType => (
    {type: "UNFOLLOW", userId} as const)
export const setUsers = (users: Array<UsersType>): setUsersActionType => (
    {type: "SET-USERS", users} as const)
export const setCurrentPage = (currentPage: number): setCurrentPageActionType => (
    {type: "SET-CURRENT-PAGE", currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number): setUsersTotalCountActionType => (
    {type: "SET-TOTAL-USERS-COUNT", count: totalUsersCount} as const)
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => (
    {type: "TOGGLE-IS-FETCHING", isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number): toggleFollowingProgressActionType => (
    {type: "TOGGLE-IS-FOLLOWING-PROGRESS", isFetching, userId} as const)


export const getUsers = (currentPage: number, pageSize: number)
    : ThunkAction<void, AppStateType, unknown, ActionsUsersType> => {
    return dispatch => {
        dispatch(toggleIsFetching(true));
        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(setCurrentPage(currentPage))
        });
    }
}

export const follow = (userId: number)
    : ThunkAction<void, AppStateType, unknown, ActionsUsersType> => {
    return dispatch => {
        dispatch(toggleFollowingProgress(true, userId));
        userAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}

export const unfollow = (userId: number)
    : ThunkAction<void, AppStateType, unknown, ActionsUsersType> => {
    return dispatch => {
        dispatch(toggleFollowingProgress(true, userId));
        userAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}

export default usersReducer;