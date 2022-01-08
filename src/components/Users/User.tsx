import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";
import {UsersType} from "../../redux/users-reducer";

type UserPropsType = {
    users: UsersType
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const User = (props: UserPropsType) => {
    return <>
        {
            <div className={s.user} key={props.users.id}>
                <div className={s.userAvatar}>
                    <NavLink to={"profile/" + props.users.id}>
                        <img src={props.users.photos.small != null ? props.users.photos.small : userPhoto}/>
                    </NavLink>
                </div>

                <div className={s.blockInfoUser}>
                    <div>
                        <div className={s.name}>{props.users.name}</div>
                        <div className={s.status}>{props.users.status !== null ? props.users.status : "I have not status"}</div>
                    </div>
                    {/*<div>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </div>*/}
                </div>
                <div>
                    {props.users.followed
                        ? <button disabled={props.followingInProgress.some(id => id === props.users.id)}
                                  onClick={() => {
                                      props.unfollow(props.users.id)
                                  }}
                                  className={s.buttonFollow}
                        >
                            unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === props.users.id)}
                                  onClick={() => {
                                      props.follow(props.users.id)
                                  }}
                                  className={s.buttonUnfollow}
                        >
                            follow</button>
                    }
                </div>
            </div>
        }
    </>
}

export default User;