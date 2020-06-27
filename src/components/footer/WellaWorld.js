import React from 'react'
import styled from 'styled-components'

const FlexDiv = styled.div`
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const StyledTitle = styled.h3`
  padding-top: 16px;
  padding-bottom: 8px;
  @media screen and (min-width: 800px) {
    padding-bottom: 16px;
  }
`

const StyledLink = styled.a`
  color: #4d4d4d;
  font-size: 12px;
  font-weight: bold;
`

const StyledLinkDiv = styled.div`
  padding-bottom: 16px;
  display: flex;
  justify-content: space-around;
`

const arrow = (
  <svg height="8" width="16">
      <polygon points="0,0 0,8 7,4" fill="#a7a8ab" />
  </svg>
)

export default () => (
  <FlexDiv>
    <StyledTitle>Świat Wella</StyledTitle>
    <StyledLinkDiv>
      <StyledLink href='mailto:professionals.pl@orbico.com'>{arrow}Kontakt</StyledLink>
    </StyledLinkDiv>
  </FlexDiv>
)