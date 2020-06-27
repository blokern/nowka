import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledDiv = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0px;
  
  @media screen and (min-width: 1024px) {
    margin: 32px 0px;
  }
`

const StyledStripe = styled.div`
  width: 100%;
  height: 2px;
  background-color: #cdcdcd;
`

const StyledTitle = styled.h2`
  position: absolute;
  color: #121212;
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  background-color: #fff;
  padding: 16px;
  @media screen and (min-width: 1024px) {
    font-size: 30px;
  }
`

const Title = ({ children }) => (
  <StyledDiv>
    <StyledStripe />
    <StyledTitle>
      {children}
    </StyledTitle>
  </StyledDiv>
)

export default Title;

Title.propTypes = {
  children: PropTypes.node.isRequired,
};