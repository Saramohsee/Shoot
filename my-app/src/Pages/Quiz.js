import React from "react";
import Style from  "./Quiz.module.css";
import Header from "../Components/Header";
import Button from "../Components/Button";
import ButtonStyle from "../Components/Button.module.css";


const questions = [
{
    question:'What habitat do you want to live in?',
    options: ['1','2','3','4','5']
},

{
    question:'What habitat do you want to live in?',
    options: ['1','2','3','4','5']
},
]





export default function Quiz () {

    return (

        <div className={Style.Quiz}>
           
            <h1 className={Style.quizTitle}>What animal am I?</h1>

            <h2 className={Style.quizQuestion}>What habitat do you want to live in?</h2>

            <div className={Style.buttons}>
                <Button className={ButtonStyle.quizButton}>option 1</Button>

                <Button className={ButtonStyle.quizButton}>option 2</Button>

                <Button className={ButtonStyle.quizButton}>option 3</Button>

                <Button className={ButtonStyle.quizButton}>option 4</Button>

                <Button className={ButtonStyle.quizButton}>option 5</Button>

            </div>
            
        </div>
    )
};
