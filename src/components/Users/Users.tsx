import React from "react";
import s from "./Users.module.css";
import {UsersPropsType} from "./UsersContainer";
import User from "./User";
import Paginator_2 from "../common/Paginator/Paginator_2";

const Users = (props: UsersPropsType) => {

    return <div className={s.usersPage}>
        <Paginator_2 currentPage={props.currentPage}
                     onPageChanged={props.onPageChanged}
                     totalItemsCount={props.totalUsersCount}
                     pageSize={props.pageSize}
        />
        <div className={s.users}>
            {
                props.users.map(u => <User key={u.id}
                                           users={u}
                                           followingInProgress={props.followingInProgress}
                                           follow={props.follow}
                                           unfollow={props.unfollow}/>)
            }
        </div>
    </div>
}

export default Users;