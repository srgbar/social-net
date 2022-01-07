import React from "react";
import "./App.css";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializedAppTC} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import store, {AppStateType} from "./redux/redux-store";


export type MapStatePropsType = {
    initialized: boolean
}

type MapDispatchPropsType = {
    initializedAppTC: () => void
}

export type AppPropsType = MapStatePropsType & MapDispatchPropsType

class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializedAppTC();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}/>

                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainer/>}/>

                    <Route path="/users"
                           render={() => <UsersContainer/>}/>

                    <Route path="/login"
                           render={() => <LoginPage/>}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        initialized: state.app.initialized
    }
}

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializedAppTC}))(App);

const SamuraiJSApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;