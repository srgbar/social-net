import React from "react";
import s from "./Footer.module.css";
import {faAtom} from "@fortawesome/free-solid-svg-icons/faAtom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Footer: React.FC = React.memo(() => {
    return (
        <footer className={s.footer}>
            <div className={s.footerText}>
                <span>This is my first project</span><br/>
                <span>Social network was developed by SrG <FontAwesomeIcon icon={faAtom} /> 2022</span>
            </div>
        </footer>
    );
})
