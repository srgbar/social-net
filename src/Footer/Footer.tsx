import React from "react";
import style from "./Footer.module.css";

export const Footer: React.FC = React.memo(() => {
    return (
        <footer className={style.footer}>
            <div className={style.footerText}>
                <span>This is my first project</span><br/>
                <span>Social network was developed by SrG</span>
            </div>
        </footer>
    );
})
