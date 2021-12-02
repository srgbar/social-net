import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {StatusPropsType} from "../ProfileContainer";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props: StatusPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.groopOfNameAndStatus}>
                    <div>
                        {props.profile.fullName}
                    </div>
                    <div className={s.status}>
                        <ProfileStatus profile={props.profile} status={props.status}
                                       updateStatus={props.updateStatus}/>
                    </div>
                </div>
                <div className={s.Photo}>
                    <div>
                        <img src={props.profile.photos.small}/>
                    </div>
                </div>
                <div className={s.blockInfoUser}>
                    <div><b>Job Description: </b> {props.profile.lookingForAJobDescription}</div>
                    <div><b>lookingForAJob: </b> {props.profile.lookingForAJob}</div>
                    <div><b>Github: </b> <a
                        href={props.profile.contacts.github}><i>{props.profile.contacts.github || ""}</i></a>
                    </div>
                    <div><b>VK: </b> <a
                        href={props.profile.contacts.vk}><i>{props.profile.contacts.vk || ""}</i></a>
                    </div>
                    <div><b>Facebook: </b> <a
                        href={props.profile.contacts.facebook}><i>{props.profile.contacts.facebook || ""}</i></a>
                    </div>
                    <div><b>Instagram: </b> <a
                        href={props.profile.contacts.instagram}><i>{props.profile.contacts.instagram || ""}</i></a>
                    </div>
                    <div><b>Twitter: </b> <a
                        href={props.profile.contacts.twitter}><i>{props.profile.contacts.twitter || ""}</i></a>
                    </div><
                    div><b>Website: </b> <a
                        href={props.profile.contacts.website}><i>{props.profile.contacts.website || ""}</i></a>
                    </div>
                    <div><b>Youtube: </b> <a
                        href={props.profile.contacts.youtube}><i>{props.profile.contacts.youtube || ""}</i></a>
                    </div>
                    <div><b>MainLink: </b> <a
                        href={props.profile.contacts.mainLink}><i>{props.profile.contacts.mainLink || ""}</i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;