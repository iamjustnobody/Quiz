export const Answer=({answerText: anwTxt,index,correctAnswer:correctAnw,selectedAnswer:selectedAnw,onSelectAnswer})=>{
    const letterMapping=["A","B","C","D","E","F"];
    const isCorrectAnw= (selectedAnw&&anwTxt===correctAnw)
    const isWrongAnw= (selectedAnw===anwTxt && selectedAnw!==correctAnw)
    const correctAnwClass= isCorrectAnw?'correct-answer':''
    const  wrongAnwClass= isWrongAnw?'wrong-answer':''
    const disabledClass= selectedAnw?'disabled-answer':''  
    return (
    <div className={`answer ${correctAnwClass} ${wrongAnwClass} ${disabledClass}`} 
        onClick={()=>onSelectAnswer(anwTxt)}>
        <div className='answer-letter'>{letterMapping[index]}</div>
        <div className='answer-text'>{anwTxt}</div>
    </div>
    )
};

