import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {CallbackType, ProfilePageType} from '../../redux/state';

const Profile = (props: ProfilePageType & CallbackType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     newPostText={props.newPostText}
                     addPostCallback={props.addPostCallback}
                     updateNewPostTextCallback={props.updateNewPostTextCallback}
            />
        </div>
    )
}

export default Profile;