import React from 'react';
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {addPostAC, increaseLikeAC, PostsType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

export type MapStatePropsType = {
    posts: Array<PostsType>
    smallImage: string

}
type MapDispatchPropsType = {
    addPost: (newMessageText: string) => void
    increaseLike: (postId: number) => void
}
export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        smallImage: state.profilePage.profile.photos.small
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (newMessageText) => {
            dispatch(addPostAC(newMessageText))
        },
        increaseLike: (postId) => {
            dispatch(increaseLikeAC(postId))
        }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);