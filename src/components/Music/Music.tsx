import React from "react";
import s from "./Music.module.css";
import {compose} from "redux";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Music = () => {

    const path1 = require("../../assets/music_tracks/overtime.mp3");
    const path2 = require("../../assets/music_tracks/rock-spot.mp3");
    const path3 = require("../../assets/music_tracks/the-last-kingdom.mp3");

    return (
            <div className={s.containerMusics}>
                <h1>My favourite tracks</h1>
                <figure>
                    <figcaption>1. Overtime:</figcaption>
                    <audio controls src={path1.default}></audio>
                    <figcaption>2. Rock-spot:</figcaption>
                    <audio controls src={path2.default}></audio>
                    <figcaption>3. The last kingdom:</figcaption>
                    <audio controls src={path3.default}></audio>
                </figure>
            </div>
    )
}

export default compose<React.ComponentType>(connect(), withAuthRedirect)(Music)
