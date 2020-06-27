import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledDiv = styled.div`
  margin: auto;
  max-width: 256px;
  position: relative;
  padding-top: 8px;

  @media screen and (min-width: 500px) {
    max-width: 450px;
  }

  @media screen and (min-width: 800px) {
    max-width: 1200px;
  }
`

const StyledLink = styled(Link)`
  text-transform: uppercase;
  font-size: 10px;
  font-weight: bold;
  text-decoration: none;
  color: #4d4d4d;
  padding: 0px 8px;

  ::before {
    padding-right: 8px;
  }
`

const StyledLinksDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const StyledRightsDiv = styled.div`
  width: 100%;
  padding: 0px;
  text-align: center;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: bold;
`

export default () => (
  <StyledDiv>
    <StyledLinksDiv>
      <StyledLink to='/terms-and-conditions'>Terms & Conditions</StyledLink>
      <StyledLink to='/about-cookies'>About Cookies</StyledLink>
      <StyledLink to='/privacy-policy'>Privacy Policy</StyledLink>
    </StyledLinksDiv>
    <StyledRightsDiv>
      Copyright 2018, COTY INC., all tra demarks registeres. All rights reserved.
    </StyledRightsDiv>
  </StyledDiv>
)