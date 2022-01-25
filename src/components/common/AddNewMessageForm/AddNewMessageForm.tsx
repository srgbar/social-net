import React from "react";
import s from "./AddNewMessageForm.module.css";
import * as Yup from "yup";
import {Field, Form, Formik, FormikHelpers} from "formik";


type FormMessageType = {
    newMessageText: string
}

type AddNewMessageFormType = {
    addPost: (newMessageText: string) => void
    placeholder: string
    titleOfButton: string
}

const AddNewMessageForm = (props: AddNewMessageFormType) => {

    const submit = (values: FormMessageType) => {
        props.addPost(values.newMessageText);
        // values.newMessageText = ""
    }

    const validationSchema = Yup.object().shape({
        newMessageText: Yup.string()
            // .min(2, 'Too short message!')
            .max(100, 'Maximum length is 100 symbols!')
            .required('Field is required')
    });

    return (
        <Formik
            initialValues={{newMessageText: ""}}
            validationSchema={validationSchema}
            onSubmit={submit}
        >
            {({errors, touched}) => (
                <Form>
                    <div className={s.formik}>
                        <Field
                            name="newMessageText"
                            type="text"
                            placeholder={props.placeholder}
                            className={errors.newMessageText && touched.newMessageText ? s.inputError : s.input}
                        />
                        <button
                            type="submit"
                            className={errors.newMessageText && touched.newMessageText ? s.buttonError : s.button}
                        >{props.titleOfButton}
                        </button>
                    </div>
                    <span className={errors.newMessageText && touched.newMessageText ? s.spanError : ""}>
                        {errors.newMessageText && touched.newMessageText ?
                            <div>{errors.newMessageText}</div> : null}
                    </span>
                </Form>
            )}
        </Formik>
    )
}

export default AddNewMessageForm;