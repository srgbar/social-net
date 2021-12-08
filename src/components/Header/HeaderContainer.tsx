import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {compose} from "redux";
import Header from "./Header";


export type MapStatePropsType = {
    isAuth: boolean
    login: string
}
type MapDispatchPropsType = {
    getAuthUserData: () => void
    logout: () => void
}

export type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getAuthUserData, logout}))
(HeaderContainer)
