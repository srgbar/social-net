import React from 'react';
import preloader from "../../../assets/images/fidget-spinner.gif";

export const Preloader = () => {
    return <div /*style={{backgroundColor: "orange"}}*/>
        <img src={preloader}/>
    </div>
};