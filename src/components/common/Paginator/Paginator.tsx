import React, {useState} from "react";
import s from "./Paginator.module.css";

type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
}

const Paginator = (props: PaginatorPropsType) => {

    const pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionSize = 15;
    const portionCount = Math.ceil((pagesCount / portionSize));
    const [portionNumber, setPortionNumber] = useState<number>(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return <div className={s.paginator}>

        {portionNumber > 1 && <button className={s.button} onClick={() => {
            setPortionNumber(1)
        }}>{`<<`}</button>}

        {portionNumber > 1 && <button className={s.button} onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>{`<`}</button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ""}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}

        {portionCount > portionNumber &&
        <button className={s.button} onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>{`>`}</button>}

        {portionCount > portionNumber && <button className={s.button} onClick={() => {
            setPortionNumber(142)
        }}>{`>>`}</button>}

    </div>
}

export default Paginator;