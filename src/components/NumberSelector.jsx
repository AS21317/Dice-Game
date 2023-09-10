import styled from "styled-components";
const NumberSelector = ({selectedNumber,setSelectedNumber,error,setError}) => {
    const arrayNum = [1, 2, 3, 4, 5, 6];

    // using use state to select boxes
    console.log(selectedNumber);

    return (
        <NumberSelectorContainer>
                <p className="error">{error}</p>
            <div className="flex">
                {arrayNum.map((value, i) => (
                    <Box
                        key={i + 1}
                        isSelected={value === selectedNumber}
                        onClick={() => setSelectedNumber(value) + setError("")}
                        
                    >
                        {value}{" "}
                    </Box>
                    ))
                }
            </div>
            <p>Select a Number</p>
        </NumberSelectorContainer>
    );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;

.flex{
    display: flex;
    gap:24px
}

p{
    font-size: 24px;
    font-weight: 700;
}

.error{
    color: red;
    font-size: 24px;
    font-weight: 700;
    /* border: 2px solid black; */
    height: 35px;
}

`;

// writing css
const Box = styled.div`
  cursor: pointer;
  width: 72px;
  height: 72px;
  border: 2px solid black;
  display: grid;
  place-items: center;
  border-radius: 10px;
  font-size: 29px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
