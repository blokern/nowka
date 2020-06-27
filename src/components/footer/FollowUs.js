import React from 'react'
import styled from 'styled-components'

import facebook from '../../img/temporary/facebook-logo.png'
import instagram from '../../img/temporary/instagram-logo.png'

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

const StyledSocialMediaDiv = styled.div`
  width: 80px;
  padding-bottom: 8px;
  display: flex;
  justify-content: space-around;
`

const StyledLogoLink = styled.div`
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding: 4px;
  width: 18px; 
  height: 18px;
`

export default () => (
  <FlexDiv>
    <StyledTitle>Śledź nas</StyledTitle>
    <StyledSocialMediaDiv>
      {/* TODO: add logo */}
      <a href='https://pl-pl.facebook.com/DomWella/'>
        <StyledLogoLink img={facebook} />
      </a>
      <a href='https://www.instagram.com/domwella/?hl=pl'>
        <StyledLogoLink img={instagram} />
      </a>
    </StyledSocialMediaDiv>
  </FlexDiv>
)