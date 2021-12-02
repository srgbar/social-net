import React from 'react';
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {addPostAC, PostsType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type MapStatePropsType = {
    posts: Array<PostsType>
}
export type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
}
export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (newPostText) => {dispatch(addPostAC(newPostText))}
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);