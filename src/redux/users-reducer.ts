import {userAPI} from "../api/api";
import {AppStateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";
import {updateObjectInArray} from "../utils/object-helpers";

// types
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

type ActionsUsersType =
    | ReturnType<typeof followSuccessAC>
    | ReturnType<typeof unfollowSuccessAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof toggleFollowingProgressAC>

export type InitialUsersStateType = typeof initialState

const initialState = {
    users: [] as Array<UsersType>,
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
}

export const usersReducer = (state: InitialUsersStateType = initialState, action: ActionsUsersType): InitialUsersStateType => {
    switch (action.type) {
        case "USERS-PAGE/FOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case "USERS-PAGE/UNFOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case "USERS-PAGE/SET-USERS": {
            return {...state, users: action.users}
        }
        case "USERS-PAGE/SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "USERS-PAGE/SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case "USERS-PAGE/TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "USERS-PAGE/TOGGLE-IS-FOLLOWING-PROGRESS":
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

// actions
export const followSuccessAC = (userId: number) => (
    {type: "USERS-PAGE/FOLLOW", userId} as const)
export const unfollowSuccessAC = (userId: number) => (
    {type: "USERS-PAGE/UNFOLLOW", userId} as const)
export const setUsersAC = (users: Array<UsersType>) => (
    {type: "USERS-PAGE/SET-USERS", users} as const)
export const setCurrentPageAC = (currentPage: number) => (
    {type: "USERS-PAGE/SET-CURRENT-PAGE", currentPage} as const)
export const setTotalUsersCountAC = (totalUsersCount: number) => (
    {type: "USERS-PAGE/SET-TOTAL-USERS-COUNT", totalUsersCount} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => (
    {type: "USERS-PAGE/TOGGLE-IS-FETCHING", isFetching} as const)
export const toggleFollowingProgressAC = (isFetching: boolean, userId: number) => (
    {type: "USERS-PAGE/TOGGLE-IS-FOLLOWING-PROGRESS", isFetching, userId} as const)

// thunks
export const requestUsersTC = (page: number, pageSize: number)
    : ThunkAction<void, AppStateType, unknown, ActionsUsersType> => {
    return async dispatch => {
        dispatch(toggleIsFetchingAC(true));
        dispatch(setCurrentPageAC(page));
        const data = await userAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetchingAC(false));
        dispatch(setUsersAC(data.items));
        dispatch(setTotalUsersCountAC(data.totalCount))
        dispatch(setCurrentPageAC(page))
    }
}

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgressAC(true, userId));
    const response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgressAC(false, userId));
}

export const followTC = (userId: number): ThunkAction<void, AppStateType, unknown, ActionsUsersType> => {
    return async dispatch => {
        followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), followSuccessAC)
    }
}

export const unfollowTC = (userId: number): ThunkAction<void, AppStateType, unknown, ActionsUsersType> => {
    return async dispatch => {
        followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userAPI), unfollowSuccessAC)
    }
}