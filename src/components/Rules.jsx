
import styled from  "styled-components"
const Rules = () => {
  return (
    <RulesContainer>
     <h2>How to play Dice Game</h2>
      <div className="text">
        <p>1.Select any number.</p>
        <p>2.Click on the Dice Image.</p>
        <p>3.After click on the dice , if selected number is equal to dice number,You will recieve points equal to your selected number.</p>
        <p>4.If selected number and dice number mismatch , Two point will be deducted from total score.</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
background-color: #FBF1F1;

max-width: 600px;
margin: 0 auto;
margin-top: 20px;
border-radius: 10px;
padding: 0 20px;
h2{
    margin-bottom: -15px;
    font-size: 24px;
    
}


.text{
    margin-top: 24px;
    max-width: 600px;
    
}

p{
    margin: 5px 0;
}

`;
