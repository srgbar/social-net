import React from 'react';
import {SuperMyPostContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <SuperMyPostContainer/>
        </div>
    )
}

export default Profile;