import React from "react";
import s from "./Login.module.css";
import * as Yup from "yup";
import {Field, Form, Formik, FormikHelpers} from "formik";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {loginTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

type FormDataLoginType = {
    email: string
    password: string
    rememberMe: boolean
}

type LoginType = {
    loginTC: (email: string, password: string, rememberMe: boolean, setStatus: (status: string) => void) => void
    isAuth: boolean
}

const LoginPage = (props: LoginType) => {

    const submit = (values: FormDataLoginType, {setStatus}: FormikHelpers<FormDataLoginType>) => {
        console.log(values);
        props.loginTC(values.email, values.password, values.rememberMe, setStatus)
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Field is required'),
        password: Yup.string()
            .required('Field is required')
    });

    if (props.isAuth) {
        return <Redirect to={"profile/"}/>
    }

    return (
        <div className={s.text}>
            <h1>login</h1>
            <Formik
                initialValues={{email: '', password: '', rememberMe: false}}
                validationSchema={validationSchema}
                onSubmit={submit}
            >
                {({status, errors, touched}) => (
                    <Form className={s.block}>
                        <div style={{textAlign: "center"}}>
                            <p>To log in get registered
                                <a href={'https://social-network.samuraijs.com/'}
                                   target={'_blank'} rel="noreferrer"> here
                                </a>
                            </p>
                            <p>or use common test account credentials:</p>
                            <p>Email: free@samuraijs.com</p>
                            <p>Password: free</p>
                        </div>
                        <div className={s.field}>
                            <label htmlFor="email" style={{marginRight: 5}}>Email</label>
                            <Field name="email" type="text" placeholder="login"
                                   className={errors.email && touched.email ? s.errorForm : s.form}
                            />
                        </div>
                        <span className={errors.email && touched.email ? s.spanError : ""}>
                                {errors.email && touched.email ?
                                    <div>{errors.email}</div> : null}
                            </span>
                        <div className={s.field}>
                            <label htmlFor="password" style={{marginRight: 5}}>Password</label>
                            <Field name="password" type="password" placeholder="password"
                                   className={errors.password && touched.password ? s.errorForm : s.form}
                            />
                        </div>
                        <span className={errors.password && touched.password ? s.spanError : ""}>
                                {errors.password && touched.password
                                    ? <div>{errors.password}</div> : null}
                            </span>
                        <div>
                            <Field name={"rememberMe"} type={"checkbox"}/>remember me
                        </div>
                        <div>
                            <button type="submit"
                                    className={s.button}
                                    disabled={!!((errors.email && touched.email) || (errors.password && touched.password))}
                            >Submit
                            </button>
                        </div>
                        <div className={s.errorServer}>
                            {status && <div>{status}</div>}
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

export default connect(mapStateToProps, {loginTC})(LoginPage);