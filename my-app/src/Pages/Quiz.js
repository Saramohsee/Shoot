import React from "react";
import Style from  "./Quiz.module.css";
import Header from "../Components/Header";

export default function Quiz () {
    return (
        <div>
            <Header></Header>
            <h1 className={Style.quizTitle}>Skin Care Quiz</h1>
        </div>
    )
};
