import React from 'react';
import s from './MyPosts.module.css';
import {MapDispatchPropsType, MyPostsPropsType} from "./MyPostsContainer";
import {Post} from "./Post/Post";
import {Field, Form, Formik} from "formik";

type FormDataNewPostMessageType = {
    newPostText: string
}

const MyPosts = (props: MyPostsPropsType) => {

    const postsElements =
        props.posts.map((p) => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.postsBlock}>
            <h3 className={s.header}>My posts</h3>
            <AddNewPostForm addPost={props.addPost}/>
            <div className={s.posts}>{postsElements}</div>
        </div>)
}

const AddNewPostForm = (props: MapDispatchPropsType) => {
    const submit = (values: FormDataNewPostMessageType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        setSubmitting(false);
        props.addPost(values.newPostText)
    }

    return (
        <div>
            <Formik
                initialValues={{newPostText: ''}}
                onSubmit={submit}>
                {({isSubmitting}) => (
                    <Form>
                        <div className={s.groopOfInputAndButton}>
                            <Field name={"newPostText"}
                                   placeholder={"Your message"}
                                   component={"textarea"}
                                   className={s.textarea}/>
                            <button type="submit"
                                    className={s.button}>Add post
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default MyPosts;