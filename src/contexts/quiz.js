import { createContext, useReducer } from "react";
import QnAs from '../data'
import { shuffleAnswers } from "../helpers";

const initialState={
    QnAs,
    currentQnAindex:0,
    showResults:false,
    correctAnswerCount:0,
    answers:shuffleAnswers(QnAs[0]),
    selectedAnswer:''
}
const reducer=(state,action)=>{
    console.log("reducer ",state,action)
    switch(action.type){
        case "NEXT_QUESTION":{
            const showResults=(state.currentQnAindex===QnAs.length-1)
            const currentQnAindex=(showResults?state.currentQnAindex:(state.currentQnAindex+1))
            const currentAnswers=showResults?[]:shuffleAnswers(state.QnAs[currentQnAindex])
            return {
                ...state,
                currentQnAindex,
                showResults,
                //answers:shuffleAnswers(state.QnAs[currentQnAindex]),
                answers:currentAnswers,
                selectedAnswer:'',
            };
        }
        case "RETAKE":{
            return initialState;
        }
        case 'SELECT_ANSWER':{
            const correctAnswerCount=(action.payload===state.QnAs[state.currentQnAindex].correctAnswer?
                (state.correctAnswerCount+1):state.correctAnswerCount)
            return {
                ...state,
                selectedAnswer:action.payload,
                correctAnswerCount
            }
        }
        default:
            return state;
    }
    //return state;
}

export const QuizContext=createContext()

export const QuizProvider=({children})=>{
    const value=useReducer(reducer,initialState)
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}