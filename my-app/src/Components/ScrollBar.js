import React from "react";
import Style from './ScrollBar.module.css';

export default function ScrollBar () {
return (
    <>
        <div className={Style.progressbar}></div>
        <div id={Style.scrollPath}></div>
    </>
)
}