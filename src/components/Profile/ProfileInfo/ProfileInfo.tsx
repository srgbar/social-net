import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {MapStatePropsType} from "../ProfileContainer";
import ProfileStatus from "./ProfileStatus";

export const ProfileInfo = (props: MapStatePropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.small}/>
                </div>
                <ProfileStatus status={"Hello, my friends"}/>
                <div style={{padding: 15}}>
                    <ul>
                        <li>{props.profile.fullName}</li>
                        <li>{props.profile.lookingForAJobDescription}</li>
                        <li>
                            <a href={props.profile.contacts.instagram}><i>instagram</i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
