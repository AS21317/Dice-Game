
// This Game is created using styled component
import { useState } from "react";
import styled from "styled-components"
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";



function App() {
    const [isGameStarted, setIsGameStarted]= useState(false);

    const toggleGamePlay=()=>{
          setIsGameStarted((prev)=>!prev);
    }

  return (
    <Top_level_container >
      {isGameStarted?<GamePlay/>:<StartGame 
       toggle={toggleGamePlay}
      />}
    </Top_level_container>
  );
}

export default App

const Top_level_container= styled.div`
max-width: 100vw;
height: 100vh;
margin-left:5% auto;

`;

