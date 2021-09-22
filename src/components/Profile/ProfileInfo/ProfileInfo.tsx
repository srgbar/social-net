import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://img5.goodfon.ru/original/2560x1024/4/7a/peizazh-most-more-zakat.jpg"
                    width="100%"
                    height="300px"
                />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;

