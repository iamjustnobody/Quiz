import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import { QuestionAnswerChoice } from "./QnAChoice";
import {summary} from "../summary";
import leturheartholdfast from "../staticAssets/Fort Atlantic - Let Your Heart Hold Fast.mp3";

const Quiz=()=>{
    const [quizState,dispatch]=useContext(QuizContext)
    return (
        <div className='quiz'>
            {quizState.showResults && (
                <div className="results">
                    <div className="congratulations">Congratulations!</div>
                    <div className="results-info">
                        <div>You have completed the practice.</div>
                        <div>You've got {quizState.correctAnswerCount} of {quizState.QnAs.length}</div>
                        <p className="summary">{summary.map(_el=>(
                                                                <p className="paragraph">
                                                                    {_el.p.split('*').map((_txt,_index)=>{
                                                                        if(_index%2!==0) return (<span style={{fontStyle:'italic',fontWeight:'lighter'}}>{_txt}</span>);
                                                                        else 
                                                                            return _txt.split('$').map((_t,_i)=>{
                                                                                if(_i%2!==0) return (<span style={{fontWeight:'bold',textDecoration: 'underline',color:'#fa3798'}}>{_t}</span>);
                                                                                else 
                                                                                    return _t;
                                                                            });
                                                                    })
                                                                    }
                                                                </p>
                                                            ))}
                            </p>
                            
                        <div className="retake-button" onClick={()=>dispatch({type:"RETAKE"})}>Retake</div>
                    </div>
                    <audio controls id='my-audio' autoPlay loop>
                        <source src={leturheartholdfast} type="audio/mp3" id='my-audio-src' />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            )}
            {!quizState.showResults && (
                <div>
                    <div className="score">
                        Question {quizState.currentQnAindex+1} / {quizState.QnAs.length}
                    </div>
                    <QuestionAnswerChoice />
                    <div className="next-button" onClick={()=>dispatch({type:"NEXT_QUESTION"})}>
                        {quizState.currentQnAindex+1==quizState.QnAs.length?'Summary':'Next'}
                    </div>
                    
                </div>
            )}
        </div>
    )
};

export default Quiz;