export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function shuffleOptions(question) {
    const correctAnswer = question.correctAnswer;
    const correctOption = question.options[correctAnswer];
    
    const shuffledOptions = shuffleArray([...question.options]);
    
    const newCorrectIndex = shuffledOptions.indexOf(correctOption);
    
    return {
        ...question,
        options: shuffledOptions,
        correctAnswer: newCorrectIndex
    };
} 