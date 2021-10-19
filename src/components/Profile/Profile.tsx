import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {DispatchType, ProfilePageType} from '../../redux/state';

const Profile = (props: ProfilePageType & DispatchType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;