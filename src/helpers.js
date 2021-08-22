export const shuffleAnswers=(QnAs)=>{
    const unshuffledAnwers=[
        QnAs.correctAnswer,
        ...QnAs.incorrectAnswers,
    ];

    return unshuffledAnwers
        .map(anw=>({sort:Math.random(),value:anw}))
        .sort((a,b)=>a.sort-b.sort)
        .map(obj=>obj.value);
}