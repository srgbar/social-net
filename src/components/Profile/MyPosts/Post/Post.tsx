import React from 'react';
import s from './Post.module.css';
import {PostsType} from "../../../../redux/profile-reducer";
import postAvatar from "../../../../assets/images/user.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons/faHeart";

type PostPropsType = {
    posts: Array<PostsType>
    smallImage: string
    increase: (id: number) => void
}

export const Post = (props: PostPropsType) => {

    const increase = (id: number) => {
        props.increase(id)
    }

    const postsElements =
        [...props.posts]
            .reverse()
            .map(p => <div key={p.id}>
                    <div className={s.item}>
                        <div>
                            <img src={props.smallImage ? props.smallImage : postAvatar}/>

                            {" " + p.message}
                        </div>
                        <div onClick={() => increase(p.id)}>
                            <FontAwesomeIcon icon={faHeart} style={{color: "palevioletred"}}/> {p.likesCount}
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