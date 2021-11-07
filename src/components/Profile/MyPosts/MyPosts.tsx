import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {MyPostsPropsType} from "./MyPostsContainer";
import {Post} from "./Post/Post";

export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements =
        props.posts.map((p) => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>);

    const onAddPost = () => {
        props.addPost();
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.target.value;
        props.updateNewPostText(body);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea
                    value={props.newPostText}
                    onChange={onPostChange}
                    style={{background: "#eaefc3"}}
                />
                </div>
                <div>
                    <button onClick={onAddPost} style={{background: "#eaefc3"}}  >Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>)
}