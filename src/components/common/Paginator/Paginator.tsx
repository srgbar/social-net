import React from "react";
import s from "./Paginator.module.css";

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
}

const Paginator = (props: PaginatorPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {pages.map(p => {
            return <span className={props.currentPage === p ? s.selectedPage : ""}
                         onClick={(e) => {
                             props.onPageChanged(p);
                         }}>{p + " "}</span>
        })}
    </div>
}

export default Paginator;