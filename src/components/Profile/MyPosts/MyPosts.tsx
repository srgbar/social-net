import React from 'react';
import s from './MyPosts.module.css';
import {MapDispatchPropsType, MyPostsPropsType} from "./MyPostsContainer";
import {Post} from "./Post/Post";
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';

type FormDataNewPostMessageType = {
    newPostText: string
}

const MyPosts = (props: MyPostsPropsType) => {

    const postsElements =
        props.posts.map((p) => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.postsBlock}>
            <h3 className={s.header}>My posts</h3>
            <div>
                <AddNewPostForm addPost={props.addPost}/>
            </div>
            <div className={s.posts}>{postsElements}</div>
        </div>)
}

export const AddNewPostForm = (props: MapDispatchPropsType) => {

    const submit = (values: FormDataNewPostMessageType) => {
        props.addPost(values.newPostText)
    }

    const validationsSchema = Yup.object().shape({
        newPostText: Yup.string()
            .min(2, 'Too short message!')
            .max(5, 'Too long message!')
            .required('Required')
    });

    return (
        <Formik
            initialValues={{newPostText: ""}}
            validationSchema={validationsSchema}
            onSubmit={submit}
        >
            {({errors, touched}) => (
                <Form>
                    <div className={s.formik}>
                        <Field
                            name="newPostText"
                            type="text"
                            placeholder="Your message"
                            className={errors.newPostText && touched.newPostText ? s.inputError : s.input}
                        />
                        <button
                            type="submit"
                            // disabled={!!(errors.newPostText && touched.newPostText)}
                            className={errors.newPostText && touched.newPostText ? s.buttonError : s.button}
                        >Add post
                        </button>
                    </div>
                    <div>
                        {errors.newPostText && touched.newPostText ?
                            <div style={{color: "red"}}>{errors.newPostText}</div> : null}
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default MyPosts;