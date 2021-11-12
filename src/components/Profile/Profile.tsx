import React from 'react';
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MapStatePropsType} from "./ProfileInfo/ProfileContainer";

export const Profile = (props: MapStatePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer/>
        </div>
    )
}