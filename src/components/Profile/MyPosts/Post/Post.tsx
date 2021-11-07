import React from 'react';
import s from './Post.module.css';
import {PostsType} from "../../../../redux/profile-reducer";
import postAvatar from "../../../../assets/images/postAvatar.png";

export const Post = (props: PostsType) => {

    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src={postAvatar}/>
                {props.message}
                <div>
                    <span>Like </span>{props.likesCount}
                </div>
            </div>
        </div>
    )
}