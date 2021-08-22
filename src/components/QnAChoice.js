import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import { Answer } from "./AnswerChoice";

export const QuestionAnswerChoice=()=>{
    const [quizState,dispatch]=useContext(QuizContext)
    return <div>
        <div className='question'>
            {quizState.QnAs[quizState.currentQnAindex].question}
        </div>
        <div className='answers'>
            {quizState.answers.map((_anw,_index)=>(
                <Answer answerText={_anw} key={_index} index={_index} 
                onSelectAnswer={anwtxt=>dispatch({type:'SELECT_ANSWER',payload:anwtxt})}
                selectedAnswer={quizState.selectedAnswer}
                correctAnswer={quizState.QnAs[quizState.currentQnAindex].correctAnswer}/>
            ))}
        </div>
    </div>
}