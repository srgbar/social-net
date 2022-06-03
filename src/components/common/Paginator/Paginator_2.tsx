import React from "react";
import s from "./Paginator.module.css";

type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
}

const Paginator_2 = (props: PaginatorPropsType) => {

    const pages = [] as number[];
    const pagesCount = Math.ceil(props.totalItemsCount! / props.pageSize);

    if (props.currentPage <= 4) {
        for (let i = 1; i <= 5; i += 1) {
            pages.push(i);
        }
        return (
            <div className={s.paginator}>
                {pages.map(page => (
                    <button
                        key={page}
                        onClick={() => props.onPageChanged(page)}
                        className={props.currentPage === page ? s.selectedPage : s.button}
                    >{page}</button>
                ))}
                <div className={s.more}>...</div>
                <button
                    onClick={() => props.onPageChanged(pagesCount)}
                    className={s.button}
                >{pagesCount}</button>
            </div>
        );
    }
    if (props.currentPage <= pagesCount - 4) {
        for (let i = props.currentPage - 2; i <= props.currentPage + 2; i += 1) {
            pages.push(i);
        }
        return (
            <div className={s.paginator}>
                <button
                    onClick={() => props.onPageChanged(1)}
                    className={s.button}
                >{1}</button>
                <div className={s.more}>...</div>
                {pages.map(page => (
                    <button
                        key={page}
                        onClick={() => props.onPageChanged(page)}
                        className={props.currentPage === page ? s.selectedPage : s.button}
                    >{page}</button>
                ))}
                <div className={s.more}>...</div>
                <button
                    onClick={() => props.onPageChanged(pagesCount)}
                    className={s.button}
                >{pagesCount}</button>
            </div>
        );
    }
    for (let i = pagesCount - 4; i <= pagesCount; i += 1) {
        pages.push(i);
    }
    return (
        <div className={s.paginator}>
            <button
                onClick={() => props.onPageChanged(1)}
                className={s.button}
            >{1}</button>
            <div className={s.more}>...</div>
            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => props.onPageChanged(page)}
                    className={props.currentPage === page ? s.selectedPage : s.button}
                >{page}</button>
            ))}
        </div>
    );
}

export default Paginator_2;