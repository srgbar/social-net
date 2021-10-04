import React from 'react';
import s from './Post.module.css';
import {PostsType} from "../../../../redux/state";

const Post = (props: PostsType) => {

    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src="http://sun9-39.userapi.com/c5136/g25744499/a_e413dc6f.jpg"/>
                {props.message}
                <div>
                    <span>Like </span>{props.likesCount}
                </div>
            </div>
        </div>
    )
}

export default Post;