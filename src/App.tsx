import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from './components/Dialogs/Dialogs';
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import state, {addPost, updateNewPostText} from "./redux/state";

const App = () => {
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
                           addPostCallback={addPost}
                           updateNewPostTextCallback={updateNewPostText}
                       />}/>
            </div>
        </div>
    )
}

export default App;


