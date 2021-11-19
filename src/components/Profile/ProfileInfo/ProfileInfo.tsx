import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {MapStatePropsType} from "../ProfileContainer";

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
                {/*ava + description*/}
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
