import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {StatusPropsType} from "../ProfileContainer";
import ProfileStatus from "./ProfileStatus";

export const ProfileInfo = (props: StatusPropsType) => {

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
                    <div><b>Instagram: </b> <a
                        href={props.profile.contacts.instagram}><i>{props.profile.contacts.instagram || ""}</i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
