import React from 'react';
import {Profile} from "../Profile";
import {ProfilesType, setUserProfile} from "../../../redux/profile-reducer";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";


export type ProfilePropsType = {
    profile: Array<ProfilesType>
}

type MapStatePropsType = {
    profile: Array<ProfilesType>
}

type MapDispatchPropsType = {
    setUserProfile: (profile: Array<ProfilesType>) => void
}
export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);