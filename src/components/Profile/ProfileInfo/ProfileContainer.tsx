import React from 'react';
import {Profile} from "../Profile";
import {ProfilesType, setUserProfile} from "../../../redux/profile-reducer";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

export type MapStatePropsType = {
    profile: ProfilesType
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfilesType) => void
}

export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userid = this.props.match.params.userId;
        // if (!userid) {
        //     userid = "2"
        // }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userid)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);