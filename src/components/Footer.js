import React from 'react'
import styled from 'styled-components'

import WellaWorld from './footer/WellaWorld'
import OtherBrands from './footer/OtherBrands'
import FollowUs from './footer/FollowUs'
import FooterBottomSection from './footer/FooterBottomSection'

const StyledFooterContainer = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  padding: 8px;
`

const StyledFooter = styled.div`
  max-width: 256px;
  margin: auto;
  color: #4d4d4d;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 500px) {
    max-width: 450px;
  }
  
  @media screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    max-width: 1200px;
  }

  @supports (-ms-accelerator: true) {
    @media screen and (min-width: 800px) {
      justify-content: space-around;
    }
  }
`

const StyledBorder = styled.div`
  width: 100%;
  height: 1px;
  border-top: #c5c5c5 solid 1px;
  @media screen and (min-width: 800px) {
    display: none;
  }
`

export default () => (
  <StyledFooterContainer>
    <StyledFooter>
      <WellaWorld />
      <StyledBorder />
      <OtherBrands />
      <StyledBorder />
      <FollowUs />
    </StyledFooter>
    <FooterBottomSection />
  </StyledFooterContainer>
)