import React, { useContext } from 'react';
import {QuizContext} from '../Helpers/Context';

function MainMenu() {
  const { setGameState , setUserName} = useContext(QuizContext);

  return (
    <div className="Menu">
     
      <label>Enter your name : </label>
      <input type="text" placeholder='your name'
        onChange={(e)=>{
          setUserName(e.target.value);
        }}
      />
      
      <button onClick={() => setGameState("quiz")}>Start Quiz</button>
    </div>
  );
}

export default MainMenu;
