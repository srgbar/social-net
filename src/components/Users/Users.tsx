import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css';

export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1",
                followed: false,
                fullName: "Dmitry",
                status: "I am boss",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                photoUrl: "https://koolinus.files.wordpress.com/2019/03/avataaars-e28093-koolinus-1-12mar2019.png",
                followed: true,
                fullName: "Sasha",
                status: "I am boss too",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: 3,
                photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuq59VakP9Gf6gw4Le3a39-K9_A-Mc7IIcpv5w9hsqDyGzsSFCqaINoCqgKMt7S4s-3v8&usqp=CAU",
                followed: false,
                fullName: "Andrew",
                status: "I am boss too",
                location: {city: "Kiev", country: "Ukraine"}
            },
            {
                id: 4,
                photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXt0MWG_1bTSaDeIl05WuvPiE7D_6JiEnAe1w2eWKO20tq7wTlXotywJdT4GJQYfgnFPM&usqp=CAU",
                followed: true,
                fullName: "Olga",
                status: "I am cool",
                location: {city: "Anapa", country: "Russia"}
            }
        ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Unfollow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
