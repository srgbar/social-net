import React from "react";
import s from "./News.module.css";
import {compose} from "redux";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const News = () => {
    return (
            <div className={s.containerMusics}>
                <h2>Habr News</h2>
                <iframe width="740" height="450"
                        src="https://www.rssdog.com/index.php?url=https%3A%2F%2Fhabr.com%2Fru%2Frss%2Fhubs%2Fall%2F30c40aa7d38d22d957ead830a042ac24%2F&mode=html&showonly=&maxitems=0&showdescs=1&desctrim=0&descmax=0&tabwidth=700px&showdate=1&utf8=1&linktarget=_blank&bordercol=%23d4d0c8&headbgcol=%23999999&headtxtcol=%23ffffff&titlebgcol=%23f1eded&titletxtcol=%23000000&itembgcol=%23ffffff&itemtxtcol=%23000000&ctl=0">
                </iframe>
                <p>Rss from <a href="https://habr.com">https://habr.com</a></p>
            </div>
    )
}

export default compose<React.ComponentType>(connect(), withAuthRedirect)(News)
