import React, {useState} from "react";
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


    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
           
        } else {
            setQuizCompleted(true);
        }
    }


    return (
        <div className={Style.Quiz}>
            <h1 className={Style.quizTitle}>What animal am I?</h1>
            {quizCompleted === false ? (
                <>
                    <h2 className={Style.quizQuestion}>{questions[currentQuestion].question}</h2>
                    <div className={Style.buttons}>
                        {questions[currentQuestion].options.map((option, index) => (
                            <Button key={index} className={ButtonStyle.quizButton} onClick={handleNextQuestion}>
                                {option}
                            </Button>
                        ))}
                    </div>
                </>
            ) : (
                <h2 className={Style.quizQuestion}>Thanks! The quiz is over!</h2>
            )}
        </div>
    );


}

