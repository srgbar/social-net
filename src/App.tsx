import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from './components/Dialogs/Dialogs';
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {StoreType} from "./redux/state";

export type PropsType = {
    store: StoreType
}

const App: React.FC<PropsType> = (props) => {

    const state = props.store.getState();

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path={"/dialogs"}
                       render={() => <Dialogs
                           dialogs={state.dialogsPage.dialogs}
                           messages={state.dialogsPage.messages}
                       />}/>
                <Route path={"/profile"}
                       render={() => <Profile
                           posts={state.profilePage.posts}
                           newPostText={state.profilePage.newPostText}
                           dispatch={props.store.dispatch.bind(props.store)}
                       />}/>
            </div>
        </div>
    )
}

export default App;


