import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Context'
import { Questions } from '../Helpers/QuizData'
import congo from '../Helpers/congo.jpg'

function EndScreen() {
  const { score, setScore, setGameState, userName, setUserName, } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
    setUserName('');
  };


  return (
    <div className='Endscreen'>
      {
        score === 3 ? <img src={congo} /> : ''
      }
      <h1>Quiz Finished</h1>
      <h2>{userName}</h2>
      <h2>{score} / {Questions.length}</h2>
      <button onClick={restartQuiz} >Restart Quiz</button>
    </div>
  );
}

export default EndScreen;

