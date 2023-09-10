
import styled from 'styled-components'
// Generating a Button component 

export const Button= styled.button`
padding: 10px 18px;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
gap: 10px;
width: 220px;
height: 44px;
border-radius: 8px;
background-color: black;
color: white;
font-size: 24px;
font-weight: 700;
border:1px solid transparent;
transition: 0.4s background ease-in;
/* position: absolute; */
right: 40px;

 &:hover{
  background-color: white;
  border:1px solid black;
  color: black;
  transition: 0.3s background ease-in;

  cursor: pointer;
 }
`;

export const OutlineButton=styled(Button)`

background-color: white;
color: black;
border: 1px solid black;

&:hover{
  background-color: black;
  border:1px solid black;
  color: white;

  cursor: pointer;
 }
`;