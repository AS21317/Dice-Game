import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import { styled } from "styled-components";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button } from "./styled/Button";
import {OutlineButton} from "./styled/Button"
import Rules from "./Rules";

const GamePlay = () => {
  //keep all states collectively here
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules,setShowRules]= useState(false);

  // Writing a function to generate random numbers

  const generateRandomNumber = (max, min) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number !!");
      return;
    }
    //remove error massage if a number is selected
    setError("");

    const randomNumber = generateRandomNumber(7, 1);
    setCurrentDice((prev) => randomNumber);

    // Prevent total score to get chane if no number is slected

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    // set the selected button unselected after dice is rolled
    setSelectedNumber(undefined);
  };

//   Writing function for reset score button 
const resetScore=()=>{
    setScore(0);
}

  // Writing condition for game play

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          setError={setError}
        />
      </div>
      {/* Passing states as props in components */}
      <RollDice currentDice={currentDice} rollDice={rollDice} />

     <div className="btn"> 
        <OutlineButton  onClick={resetScore}>Reset Score</OutlineButton>
        <Button
        
        onClick={()=>setShowRules((prev)=>!prev)}> {showRules?"Hide":"Show"} Rules</Button>

      </div>
      {showRules && < Rules/>}


    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  padding-top: 70px;
  
  .top_section {
    display: flex;
    max-width: 1300px;
    justify-content: space-between;
    align-items: end;
    margin: 0 auto;
  }

  .btn{
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-top: 10px;
  }
`;
