import React, {ChangeEvent, useState} from "react";
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import {ContactsType, ProfilesType} from "../../../redux/profile-reducer";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ProfileDataForm, {FormProfileDataType} from "./ProfileDataForm";
import {faPaintBrush} from "@fortawesome/free-solid-svg-icons/faPaintBrush";

type ProfileInfoPropsType = {
    profile: ProfilesType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: Blob) => void
    changeProfileData: (profile: FormProfileDataType) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

    const [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }

    const onActivateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
            <div className={s.descriptionBlock}>
                <div className={s.groopOfNameAndStatus}>
                    <div className={s.fullName}>
                        {props.profile.fullName}
                    </div>
                    <div className={s.status}>
                        {props.isOwner
                            ? <ProfileStatusWithHooks profile={props.profile} status={props.status}
                                                      updateStatus={props.updateStatus}/>
                            : props.status || "I have not status"
                        }
                    </div>
                </div>
                <div className={s.blockPhotoAndInfoUser}>
                    <div className={s.photo}>
                        <img src={props.profile.photos.small != null ? props.profile.photos.small : userPhoto} alt={"user photo"}/>
                        {props.isOwner
                            ? <label>
                                <FontAwesomeIcon icon={faPaintBrush} className={s.buttonLoad}/>
                                <input type="file" onChange={onMainPhotoSelected}/>
                            </label>
                            : ""
                        }
                    </div>

                    {editMode
                        ? <ProfileDataForm profile={props.profile}
                                           changeProfileData={props.changeProfileData}
                                           deactivateEditMode={deactivateEditMode}
                        />
                        : <ProfileData profile={props.profile}
                                       isOwner={props.isOwner}
                                       onActivateEditMode={onActivateEditMode}
                        />}

                </div>
            </div>
    )
}

export default ProfileInfo;

type ProfileDataPropsType = {
    profile: ProfilesType
    isOwner: boolean
    onActivateEditMode: () => void
}

const ProfileData = (props: ProfileDataPropsType) => {
    return (
        <div className={s.formContainer}>
            {props.isOwner && <div className={s.formButton}>
                <button onClick={props.onActivateEditMode} className={s.button}><FontAwesomeIcon icon={faPen}/></button>
            </div>}
            <div className={s.blockInfoUser}>
                <div className={s.field}><b style={{color: "chocolate"}}>About me: </b> {props.profile.aboutMe}</div>
                <div className={s.field}><b style={{color: "chocolate"}}>Looking for a
                    job: </b> {props.profile.lookingForAJob ? "Open to work" : "Busy"}</div>
                <div className={s.field}><b style={{color: "chocolate"}}>My
                    skills: </b> {props.profile.lookingForAJobDescription}</div>
                <div className={s.field} style={{marginTop: 15}}>

                    {
                        props.profile.contacts.facebook ||
                        props.profile.contacts.vk ||
                        props.profile.contacts.twitter ||
                        props.profile.contacts.instagram ||
                        props.profile.contacts.mainLink ||
                        props.profile.contacts.github ||
                        props.profile.contacts.website ||
                        props.profile.contacts.youtube

                            ? <>
                                <b style={{color: "chocolate"}}>Contacts: </b>{(Object.keys(props.profile.contacts) as Array<keyof ContactsType>).map((key, index) => {
                                return <Contacts key={index} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                            })}
                            </>
                            : <div>
                                <b style={{color: "chocolate"}}>Contacts: </b>no contacts
                            </div>
                    }


                </div>
            </div>
        </div>
    );
};


type ContactsPropsType = {
    contactTitle: string | null
    contactValue: string | null
}

const Contacts = (props: ContactsPropsType) => {
    return (
        <div>
            <ul className={s.field}>
                {props.contactValue
                    ? <li>
                        <b style={{color: "chocolate"}}>{props.contactTitle}</b>: <a
                        href={props.contactValue ? props.contactValue : ""}>
                        {props.contactValue ? props.contactValue : ""}</a>
                    </li>
                    : null}
            </ul>
        </div>
    );
};

