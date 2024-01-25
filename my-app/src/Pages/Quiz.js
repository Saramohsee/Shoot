import React from "react";
import Style from  "./Quiz.module.css";
import Header from "../Components/Header";
import Button from "../Components/Button";
import ButtonStyle from "../Components/Button.module.css";


const questions = [
{
    question:'What habitat do you want to live in?',
    options: ['snow', 'savanah', 'grassland', 'forest', 'ocean']
},

{
    question:'Favorite Food?',
    options: ['pizza','burger','stir fry','cookie','fish & chips']
},

{
    question: 'Favorite Thing to do on the Weekend?',
    options: ['Spend time with family', 'Spend time with friends', 'Go on adventures', 'Sit at home on the couch', 'Go to the beach']
},

{
    question:'If you you saw a burgerler, with a knife try and steal from your loved one, what would you do?',
    options: ['I would immediatly go and protect my loved one at all cost even if it means I could get hurt', 'I would attack the burgerler', 'I would be too scared and go find help or call police', 'I would freeze', 'I would yell at the burgler and try and get him to go away']
   
},

{
    question: 'what is your fav season?',
    options: ['Winter','Summer', 'Autumn', 'Spring', 'I do not mind']
}
]



export default function Quiz () {

    return (
        <div className={Style.Quiz}>
            <h1 className={Style.quizTitle}>What animal am I?</h1>
            <h2 className={Style.quizQuestion}>What habitat do you want to live in?</h2>
            <div className={Style.buttons}>
                <Button className={ButtonStyle.quizButton}>{questions.options[1]}</Button>
                <Button className={ButtonStyle.quizButton}>{questions.options[2]}</Button>
                <Button className={ButtonStyle.quizButton}>{questions.options[3]}</Button>
                <Button className={ButtonStyle.quizButton}>{questions.options[4]}</Button>
                <Button className={ButtonStyle.quizButton}>{questions.options[5]}</Button>
            </div>
        </div>
    )
};
