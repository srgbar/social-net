import {Field, Form, Formik} from 'formik';
import React from 'react';
import s from './Login.module.css';

type FormDataLoginType = {
    login: string
    password: string
    rememberMe: boolean
}

const loginFormValidate = () => {
    const errors = {}
    return errors;
}

const Login = () => {
    const submit = (values: FormDataLoginType, {setSubmitting}: {setSubmitting: (isSubmitting: boolean) => void}) => {
        setSubmitting(false);
        console.log(values)
    }
    return (
        <div className={s.block}>
            <h1>Login</h1>
            <Formik
                initialValues={{login: '', password: '', rememberMe: true}}
                validate={loginFormValidate}
                onSubmit={submit}
            >
                {({isSubmitting}) => (
                    <Form>
                        <div>
                            <Field placeholder={"Login"} name={"login"} component={"input"}/>
                        </div>
                        <div>
                            <Field placeholder={"Password"} name={"password"} component={"input"}/>
                        </div>
                        <div>
                            <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
                        </div>
                        <div>
                            <button type="submit">Login</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Login;