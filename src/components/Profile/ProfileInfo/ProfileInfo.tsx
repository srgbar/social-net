import React from 'react';
import s from './ProfileInfo.module.css';
import cub from "../../../assets/images/cub.jpg";

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={cub}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
