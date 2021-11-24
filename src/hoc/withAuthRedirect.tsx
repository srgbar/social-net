import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type mapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect <T>(Component: ComponentType<T>) {
    debugger
    const RedirectComponent = (props: mapStatePropsType) => {
        debugger
        const{isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={"/login"}/>

        return <Component {...restProps as T}/>
    }

    const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent;
}