import React from 'react';
import s from './Login.module.css';
import * as Yup from "yup";
import {Field, Form, Formik} from 'formik';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

type FormDataLoginType = {
    email: string
    password: string
    rememberMe: boolean
}

type LoginType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const Login = (props: LoginType) => {

    const submit = (values: FormDataLoginType) => {
        console.log(values);
        props.login(values.email, values.password, values.rememberMe)
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            // .min(2, 'Too short message!')
            // .max(10, 'Too long message!')
            .required('Required'),
        password: Yup.string()
            .required('Required')
    });

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div className={s.block}>
            <h1>Login</h1>
            <Formik
                initialValues={{email: '', password: '', rememberMe: false}}
                validationSchema={validationSchema}
                onSubmit={submit}
            >
                {({errors, touched}) => (
                    <Form>
                        <div>
                            <Field name={"email"} type="input" placeholder={"Email"}
                                   className={errors.email && touched.email ? s.errorForm : s.form}
                            />
                            <span className={errors.email && touched.email ? s.spanError : ""}>
                        {errors.email && touched.email ?
                            <div>{errors.email}</div> : null}
                        </span>
                        </div>
                        <div>
                            <Field name={"password"} type="password" placeholder={"Password"}
                                   className={errors.password && touched.password ? s.errorForm : s.form}
                            />
                            <span className={errors.password && touched.password ? s.spanError : ""}>
                                {errors.password && touched.password
                                    ? <div>{errors.password}</div> : null}
                            </span>
                        </div>
                        <div>
                            <Field name={"rememberMe"} type={"checkbox"}/> remember me
                        </div>
                        <div>
                            <button type="submit"
                                    className={s.button}
                                    disabled={!!((errors.email && touched.email) || (errors.password && touched.password))}
                            >Login
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);