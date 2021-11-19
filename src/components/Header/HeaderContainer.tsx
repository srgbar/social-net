import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {DataType, setAuthUserData} from "../../redux/auth-reducer";
import {userAPI} from "../../api/api";


export type MapStatePropsType = {
    isAuth: boolean
    login: string
}
type MapDispatchPropsType = {
    setAuthUserData: (data: DataType) => void
}

export type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {

            userAPI.authSocNet().then(data => {
                if (data.resultCode === 0) {
                    // let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(data);
                }
            });
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
