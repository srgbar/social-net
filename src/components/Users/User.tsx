import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";
import {UsersType} from "../../redux/users-reducer";

type UserPropsType = {
    users: Array<UsersType>
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const User = (props: UserPropsType) => {
    return <>
        {
            props.users.map(u => <div className={s.user} key={u.id}>
                <div className={s.userAvatar}>
                    <NavLink to={"profile/" + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                    </NavLink>
                </div>

                <div className={s.blockInfoUser}>
                    <div>
                        <div className={s.name}>{u.name}</div>
                        <div className={s.status}>
                            <div>{u.status}</div>
                        </div>
                    </div>
                    {/*<div>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </div>*/}
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.unfollow(u.id)
                                  }}
                                  className={s.buttonFollow}
                        >
                            unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.follow(u.id)
                                  }}
                                  className={s.buttonUnfollow}
                        >
                            follow</button>
                    }
                </div>
            </div>)
        }
    </>
}

export default User;