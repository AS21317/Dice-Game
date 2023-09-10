// Importing styled component to done css works
import styled from 'styled-components'

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore

// Writting css for this component

const ScoreContainer=styled.div`
max-width: 200px;
text-align: center;
h1{
    font-size: 100px;
    line-height: 100px;

}

p{
    font-size: 24px;
    font-weight: 600;
}
`;
