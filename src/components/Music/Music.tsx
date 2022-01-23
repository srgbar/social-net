import React from "react";
import s from "./Music.module.css";
import {compose} from "redux";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Music = () => {

    const path1 = require("../../assets/music_tracks/overtime.mp3");
    const path2 = require("../../assets/music_tracks/rock-spot.mp3");
    const path3 = require("../../assets/music_tracks/the-last-kingdom.mp3");

    const path4 = require("../../assets/music_tracks/acoustic.mp3");
    const path5 = require("../../assets/music_tracks/pack-your-backpack.mp3");
    const path6 = require("../../assets/music_tracks/ghost-song.mp3");

    return (
            <div className={s.containerMusics}>
                <figure className={s.tracksHard}>
                    <h2>Hard tracks</h2>
                    <figcaption >1. Overtime:</figcaption>
                    <audio controls src={path1.default} style={{margin: 5}}></audio>
                    <figcaption>2. Rock-spot:</figcaption>
                    <audio controls src={path2.default} style={{margin: 5}}></audio>
                    <figcaption>3. The last kingdom:</figcaption>
                    <audio controls src={path3.default} style={{margin: 5}}></audio>
                </figure>
                <figure className={s.tracksLite}>
                    <h2>Lite tracks</h2>
                    <figcaption >1. Acoustic:</figcaption>
                    <audio controls src={path4.default} style={{margin: 5}}></audio>
                    <figcaption>2. Pack your backpack:</figcaption>
                    <audio controls src={path5.default} style={{margin: 5}}></audio>
                    <figcaption>3. Ghost song:</figcaption>
                    <audio controls src={path6.default} style={{margin: 5}}></audio>
                </figure>
            </div>
    )
}

export default compose<React.ComponentType>(connect(), withAuthRedirect)(Music)
