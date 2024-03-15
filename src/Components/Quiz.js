import React, { useContext, useState } from 'react';
import { Questions } from '../Helpers/QuizData'
import { QuizContext } from '../Helpers/Context'

function Quiz(p) {
  const { setGameState, setScore, score } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };

  return (
    <div className='Quiz'>
      <h2 className='quest'>{Questions[currentQuestion].prompt}</h2>
      <div className='Options'>
        <button onClick={() => setOptionChosen("A")}>{Questions[currentQuestion].optionA}</button>
        <button onClick={() => setOptionChosen("B")}>{Questions[currentQuestion].optionB}</button>
        <button onClick={() => setOptionChosen("C")}>{Questions[currentQuestion].optionC}</button>
        <button onClick={() => setOptionChosen("D")}>{Questions[currentQuestion].optionD}</button>
      </div>

      {currentQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz} id='nextquestion'>Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion} id='nextquestion'>Next Question</button>
      )}
    </div>
  );
}

export default Quiz;
