import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;

  :focus {
    outline: none;
  }
`

const StyledTile = styled.div`
  width: 100%; 
  height: 50px;
  margin-bottom: 5px;
  color: white;
  background: #C8003C;
  display: grid;
  grid-template-columns: 16px 1fr 3fr 1fr 16px;
  justify-items: center;
  align-items: center;

  @media screen and(min-width:400px) {
    grid-template-columns: 40px 1fr 3fr 1fr 40px;
  }
  
  span {
    font-size: 0.8rem;
    justify-self: start;
  }
  
  p {
    font-size: 1.1rem;
  }
  
`;

const arrow = (
  <svg height="8" width="10">
      <polygon points="8,0 8,8 1,4" fill="white" />
  </svg>
)

const handleClick = (e, handleReturn) => {
  e.preventDefault();
  handleReturn();
};

const ReturnButton = ({ title, handleReturn }) => {
  return (
    <StyledButton onClick={e => handleClick(e, handleReturn)}>
      <StyledTile>
        <span />
        <span> {arrow} Powrót </span>
        <p> {title} </p>
      </StyledTile>
    </StyledButton>
  );
};

export default ReturnButton;