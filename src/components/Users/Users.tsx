import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {UsersPropsType} from "./UsersContainer";
import {NavLink} from "react-router-dom";

const Users = (props: UsersPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={s.users}>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ""}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p + " "}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id} className={s.margins}>
                <div className={s.photoAndButton}>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                             className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress/*.some(id => id === u.id)*/}
                                      onClick={() => {props.unfollow(u.id)}}
                                      style={{backgroundColor: "#ece1f5"}}
                            >
                                Unfollow</button>
                            : <button disabled={props.followingInProgress/*.some(id => id === u.id)*/}
                                      onClick={() => {props.follow(u.id)}}
                                      style={{backgroundColor: "#faf2ca"}}
                            >
                                Follow</button>
                        }
                    </div>
                </div>
                <div className={s.blockInfoUser}>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users;