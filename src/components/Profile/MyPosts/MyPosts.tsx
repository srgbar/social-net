import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostAC, DispatchType, ProfilePageType, updateNewPostTextAC} from '../../../redux/state';

const MyPosts = (props: ProfilePageType & DispatchType) => {

    const postsElements =
        props.posts.map((p) => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>);

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            props.dispatch(addPostAC(newPostElement.current.value))
            newPostElement.current.value = "";
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            props.dispatch(updateNewPostTextAC(newPostElement.current.value)) // ctrl + alt + V - создать переменную объекта
            newPostElement.current.value = "";
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}/>
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

