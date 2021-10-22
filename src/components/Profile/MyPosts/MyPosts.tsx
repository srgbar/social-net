import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {DispatchType, ProfilePageType} from '../../../redux/state';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";

const MyPosts = (props: ProfilePageType & DispatchType) => {

    const postsElements =
        props.posts.map((p) => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>);

    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.target.value;
        props.dispatch(updateNewPostTextAC(body));
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea
                        value={props.newPostText}
                        onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>)
}

export default MyPosts;

