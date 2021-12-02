import React from 'react';
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {StatusPropsType} from "./ProfileContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props: StatusPropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
            />
            <MyPostContainer/>
        </div>
    )
}

export default Profile;