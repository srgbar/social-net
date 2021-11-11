import React from 'react';
import s from './ProfileInfo.module.css';
import cub from "../../../assets/images/cub.jpg";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfilePropsType} from "./ProfileContainer";

export const ProfileInfo = (props: ProfilePropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }
    debugger
    return (
        <div>
            <div>
                <img src={cub}/>
            </div>
            <div className={s.descriptionBlock}>

                {/*<img src={props.profile.photos.large} />*/}
                ava + description
            </div>
        </div>
    )
}
