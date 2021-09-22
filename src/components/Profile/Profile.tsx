import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {ProfilePageType} from '../../redux/state';


const Profile = (props: ProfilePageType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPostCallback={props.addPostCallback}/>
        </div>
    )
}

export default Profile;