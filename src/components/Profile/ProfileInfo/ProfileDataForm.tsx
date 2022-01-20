import {ContactsType} from "../../../redux/profile-reducer";
import React from "react";
import s from "./ProfileDataForm.module.css";
import {Field, Form, Formik, FormikHelpers} from "formik";
import * as Yup from "yup";
import {faCheck} from "@fortawesome/free-solid-svg-icons/faCheck";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export type FormProfileDataType = {
    fullName: string
    aboutMe: string
    lookingForAJobDescription: string
    lookingForAJob: boolean
    contacts: ContactsType
}

type ProfileDataFormPropsType = {
    profile: FormProfileDataType
    changeProfileData: (profile: FormProfileDataType,
                        setStatus: (status: string) => void,
                        setSubmitting: (isSubmitting: boolean) => void) => any
    deactivateEditMode: () => void
}

const ProfileDataForm = (props: ProfileDataFormPropsType) => {

    const submit = (values: FormProfileDataType, actions: FormikHelpers<FormProfileDataType>) => {
        props.changeProfileData(values, actions.setStatus, actions.setSubmitting).then(() => {
            props.deactivateEditMode()
        })
        // console.log(actions.setStatus, actions.setSubmitting)
    }

    const validationSchema = Yup.object().shape({
        fullName: Yup.string()
            .required('Field is required'),
        aboutMe: Yup.string()
            .required('Field is required')
            .min(10, 'Min length is 10 symbols!'),
        lookingForAJobDescription: Yup.string()
            .required('Field is required')
            .min(10, 'Min length is 10 symbols!'),
    });

    return (
        <Formik
            initialValues={props.profile}
            validationSchema={validationSchema}
            onSubmit={submit}
        >
            {({isSubmitting, status, errors, touched}) => (
                <Form className={s.formContainer}>
                    <div className={s.formButton}>
                        <button type="submit" className={s.button}><FontAwesomeIcon icon={faCheck}/></button>
                        <button onClick={props.deactivateEditMode} className={s.button}>x</button>
                    </div>
                    <div className={s.blockInfoUser}>
                        <div className={s.field}>
                            <span><b>Full name: </b></span>
                            <Field name="fullName" type="text"
                                   className={errors.fullName && touched.fullName ? s.errorForm : s.form}
                            />
                        </div>
                        <span className={errors.fullName && touched.fullName ? s.spanError : ""}>
                                {errors.fullName && touched.fullName ?
                                    <div>{errors.fullName}</div> : null}
                            </span>
                        <div className={s.field}>
                            <span><b>About me: </b></span>
                            <Field name="aboutMe" type="text"
                                   className={errors.aboutMe && touched.aboutMe ? s.errorForm : s.form}
                            />
                        </div>
                        <span className={errors.aboutMe && touched.aboutMe ? s.spanError : ""}>
                                {errors.aboutMe && touched.aboutMe ?
                                    <div>{errors.aboutMe}</div> : null}
                            </span>
                        <div className={s.checkboxField}>
                            <span><b>Looking for a job: </b></span>
                            <Field name="lookingForAJob" type="checkbox"
                                   className={errors.lookingForAJob && touched.lookingForAJob ? s.errorForm : s.form}
                            />
                        </div>
                        <div className={s.field}>
                            <span><b>My skills: </b></span>
                            <Field name="lookingForAJobDescription" type="text"
                                   className={errors.lookingForAJobDescription && touched.lookingForAJobDescription ? s.errorForm : s.form}
                            />
                        </div>
                        <span
                            className={errors.lookingForAJobDescription && touched.lookingForAJobDescription ? s.spanError : ""}>
                                {errors.lookingForAJobDescription && touched.lookingForAJobDescription ?
                                    <div>{errors.lookingForAJobDescription}</div> : null}
                            </span>
                        <div>
                            <b>Contacts</b>: {(Object.keys(props.profile.contacts) as Array<keyof ContactsType>).map((key, index) => {
                            return <div key={key} className={s.field}>
                                <span>{key}: </span><Field name={"contacts." + key} type="text" className={s.form}/>
                            </div>
                        })}
                        </div>
                        <span className={s.errorServer}>
                            {isSubmitting && status && <div>{status}</div>}
                        </span>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ProfileDataForm;