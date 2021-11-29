import React from 'react';
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StatusPropsType} from "./ProfileContainer";

export const Profile = (props: StatusPropsType) => {
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