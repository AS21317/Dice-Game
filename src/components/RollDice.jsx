
import styled from 'styled-components'
const RollDice = ({currentDice,rollDice}) => {



  return (
    <DiceContainer>
        <div className='dice' 
        onClick={rollDice}    >
            <img className='img' src={`/images/dice_${currentDice}.png`} alt="" />
        
        <p>Click on Dice to Roll </p>
        </div>
    </DiceContainer>
    
  
  )
}

export default RollDice

const DiceContainer= styled.div`
margin: 0 auto;
margin-top: 49px;

max-width: 1300px;
    
  

    p{
        font-size: 24px;


    }
    .img{
        height: 150px;
    }

    .dice{
        display: flex;
    flex-direction: column;
    align-items: center;
        cursor: pointer;

    }
`;