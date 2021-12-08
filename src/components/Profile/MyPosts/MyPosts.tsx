import React from 'react';
import s from './MyPosts.module.css';
import {MyPostsPropsType} from "./MyPostsContainer";
import {Post} from "./Post/Post";
import AddNewMessageForm from "../../common/AddNewMessageForm/AddNewMessageForm";


const MyPosts = (props: MyPostsPropsType) => {

    const postsElements =
        props.posts.map((p) => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.postsBlock}>
            <h3 className={s.header}>My posts</h3>
            <div>
                <AddNewMessageForm
                    addPost={props.addPost}
                    placeholder={"Your message"}
                    titleOfButton={"Add post"}
                />
            </div>
            <div className={s.posts}>{postsElements}</div>
        </div>)
}

export default MyPosts;