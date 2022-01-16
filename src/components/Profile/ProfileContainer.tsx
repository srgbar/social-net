import React from 'react';
import {
    changeProfileDataTC,
    getStatusTC,
    getUserProfileTC,
    ProfilesType,
    savePhotoTC,
    updateStatusTC
} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import Profile from "./Profile";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {FormProfileDataType} from "./ProfileInfo/ProfileDataForm";

type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

type MapStatePropsType = {
    profile: ProfilesType
    status: string
    authorizedUserId: number
    isAuth: boolean
    isOwner?: boolean
}
type MapDispatchPropsType = {
    getUserProfileTC: (userId: number) => void
    getStatusTC: (userId: number) => void
    updateStatusTC: (status: string) => void
    savePhotoTC: (file: Blob) => void
    changeProfileDataTC: (profile: FormProfileDataType) => void
}
export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType


class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = Number(this.props.match.params.userId);
        if (!userId) {
            userId = this.props.authorizedUserId;
            // if (!userId) {
            //     this.props.history.push("/login");
            // }
        }
        this.props.getUserProfileTC(userId);
        this.props.getStatusTC(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
            this.refreshProfile();
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatusTC={this.props.updateStatusTC}
                     isOwner={!this.props.match.params.userId}
                     savePhotoTC={this.props.savePhotoTC}
                     changeProfileDataTC={this.props.changeProfileDataTC}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.data.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            getUserProfileTC,
            getStatusTC,
            updateStatusTC,
            savePhotoTC,
            changeProfileDataTC
        }), withRouter, withAuthRedirect)(ProfileContainer)