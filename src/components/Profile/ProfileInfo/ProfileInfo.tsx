import React, {ChangeEvent} from "react";
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import {ProfilesType} from "../../../redux/profile-reducer";
import {faFileImage} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type ProfileInfoPropsType = {
    profile: ProfilesType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: Blob) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
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
                    <div className={s.blockInfoUser}>
                        <div><b>About me: </b> {props.profile.aboutMe}</div>
                        <div><b>Job Description: </b> {props.profile.lookingForAJobDescription}</div>
                        <div><b>looking a job: </b> {props.profile.lookingForAJob ? "Open to work" : "Busy"}</div>
                        <ul style={{margin: 10, padding: 5}}><b>Contacts</b>:
                            <li><b>github: </b> <a
                                href={props.profile.contacts.github}><i>{props.profile.contacts.github || ""}</i></a>
                            </li>
                            <li><b>vk: </b> <a
                                href={props.profile.contacts.vk}><i>{props.profile.contacts.vk || ""}</i></a>
                            </li>
                            <li><b>facebook: </b> <a
                                href={props.profile.contacts.facebook}><i>{props.profile.contacts.facebook || ""}</i></a>
                            </li>
                            <li><b>instagram: </b> <a
                                href={props.profile.contacts.instagram}><i>{props.profile.contacts.instagram || ""}</i></a>
                            </li>
                            <li><b>twitter: </b> <a
                                href={props.profile.contacts.twitter}><i>{props.profile.contacts.twitter || ""}</i></a>
                            </li>
                            <li><b>website: </b> <a
                                href={props.profile.contacts.website}><i>{props.profile.contacts.website || ""}</i></a>
                            </li>
                            <li><b>youtube: </b> <a
                                href={props.profile.contacts.youtube}><i>{props.profile.contacts.youtube || ""}</i></a>
                            </li>
                            <li><b>mainLink: </b> <a
                                href={props.profile.contacts.mainLink}><i>{props.profile.contacts.mainLink || ""}</i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;