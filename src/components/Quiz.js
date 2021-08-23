import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import { QuestionAnswerChoice } from "./QnAChoice";

const Quiz=()=>{
    const [quizState,dispatch]=useContext(QuizContext)
    return (
        <div className='quiz'>
            {quizState.showResults && (
                <div className="results">
                    <div className="congratulations">congratulations!</div>
                    <div className="results-info">
                        <div>You have completed the practice.</div>
                        <div>You've got {quizState.correctAnswerCount} of {quizState.QnAs.length}</div>
                        <p className="summary">Hi Chris - You've probably been aware of this long time ago - 
                            I've been very fond of you ever since 2 secs after we first met.
                            I know it is a corney thing to say but life is truely too short not to go big.
                            I just dont wanna regret for the things I want to say but never found a chance to.
                            I'd like to share a lot of boring things in my life with you and show you all aspects of me,
                            as much as I want to be involved in your life too (of course only if you want that as well).
                            Thanks to me being the one who's always proactively reaching out to you,
                            and thanks to you occationally not rejecting me, we occationally see each other in the past few years.
                            You have no idea how much I missed you every time you left, no matter how much (or in fact how little) time we had spent together.
                            It's been a bit frustrating that you didn't seem interested in getting to know more about me or spending more time with me.
                            Maybe that no positive signals is in fact a negative signal you sent to me.
                            But that's fine - I just wanna make it crystal clear to you where my heart lies - that's all. As simple as that.</p>
                        <div className="retake-button" onClick={()=>dispatch({type:"RETAKE"})}>Retake</div>
                    </div>
                </div>
            )}
            {!quizState.showResults && (
                <div>
                    <div className="score">
                        Question {quizState.currentQnAindex+1} / {quizState.QnAs.length}
                    </div>
                    <QuestionAnswerChoice />
                    <div className="next-button" onClick={()=>dispatch({type:"NEXT_QUESTION"})}>Next</div>
                </div>
            )}
        </div>
    )
};

export default Quiz;