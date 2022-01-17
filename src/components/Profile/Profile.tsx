import React from 'react';
import s from './Profile.module.css';
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileContainerPropsType} from "./ProfileContainer";

const Profile = (props: ProfileContainerPropsType) => {
    return (
        <div className={s.profile}>
            <div className={s.container}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatusTC}
                         isOwner={props.isOwner ? props.isOwner : false}
                         savePhoto={props.savePhotoTC}
                         changeProfileData={props.changeProfileDataTC}
            />
            <MyPostContainer/>
            </div>
        </div>
    )
}

export default Profile;