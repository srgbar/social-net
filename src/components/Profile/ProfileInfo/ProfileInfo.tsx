import React, {ChangeEvent, useCallback, useState} from "react";
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import {ContactsType, ProfilesType} from "../../../redux/profile-reducer";
import {faFileImage} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ProfileDataForm, {FormProfileDataType} from "./ProfileDataForm";

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
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.groopOfNameAndStatus}>
                    <div className={s.fullName}>
                        {props.profile.fullName}
                    </div>
                    <div className={s.status}>
                        <ProfileStatusWithHooks profile={props.profile} status={props.status}
                                                updateStatus={props.updateStatus}/>
                    </div>
                </div>
                <div className={s.blockPhotoAndInfoUser}>
                    <div className={s.photo}>
                        <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}/>
                        {props.isOwner
                            ? <label>
                                <FontAwesomeIcon icon={faFileImage} className={s.buttonLoad}/>
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
        <div>
            {props.isOwner && <div>
                <button onClick={props.onActivateEditMode}>edit</button>
            </div>}
            <div className={s.blockInfoUser}>
                <div><b>About me: </b> {props.profile.aboutMe}</div>
                <div><b>Job Description: </b> {props.profile.lookingForAJobDescription}</div>
                <div><b>looking a job: </b> {props.profile.lookingForAJob ? "Open to work" : "Busy"}</div>
                <div className={s.contacts}>
                    <b>Contacts</b>: {(Object.keys(props.profile.contacts) as Array<keyof ContactsType>).map((key, index) => {
                    return <Contacts key={index} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                })}
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
            <ul>
                <li><b>{props.contactTitle}</b>: <a href={props.contactValue ? props.contactValue : ""}>
                    {props.contactValue ? props.contactValue : ""}</a>
                </li>
            </ul>
        </div>
    );
};

