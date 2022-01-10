import React from 'react';
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileContainerPropsType} from "./ProfileContainer";

const Profile = (props: ProfileContainerPropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatusTC}
                         isOwner={props.isOwner ? props.isOwner : false}
                         savePhoto={props.savePhotoTC}
            />
            <MyPostContainer/>
        </div>
    )
}

export default Profile;