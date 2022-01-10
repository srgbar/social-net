import React from 'react';
import s from './MyPosts.module.css';
import {MyPostsPropsType} from "./MyPostsContainer";
import {Post} from "./Post/Post";
import AddNewMessageForm from "../../common/AddNewMessageForm/AddNewMessageForm";


const MyPosts = React.memo<MyPostsPropsType>(props => {

    return (
        <div className={s.postsBlock}>
            <h3 className={s.header}>My posts</h3>
            <div>
                <AddNewMessageForm
                    addPost={props.addPost}
                    placeholder={"Your message"}
                    titleOfButton={"Add post"}
                />
                <Post posts={props.posts}
                      smallImage={props.smallImage}
                />
            </div>
        </div>)
})

export default MyPosts;