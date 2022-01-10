import React from 'react';
import s from './Post.module.css';
import {PostsType} from "../../../../redux/profile-reducer";
import postAvatar from "../../../../assets/images/postAvatar.png";

type PostPropsType = {
    posts: Array<PostsType>
    smallImage: string | null
}

export const Post = (props: PostPropsType) => {

    const postsElements =
        [...props.posts]
            .reverse()
            .map(p => <div key={p.id}>
                    <div className={s.item}>
                        <img src={props.smallImage ? props.smallImage : postAvatar}/>
                        {p.message}
                        <div>
                            <span>Like </span>{p.likesCount}
                        </div>
                    </div>
                </div>
            );

    return (
        <div className={s.posts}>
            {postsElements}
        </div>
    );
}