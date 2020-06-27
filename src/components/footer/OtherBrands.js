import React from 'react'
import styled from 'styled-components'

import ghd from '../../img/other-companies/Ghd.svg'
import nioxin from '../../img/other-companies/nioxin.svg'
import londa from '../../img/other-companies/Londa.svg'
import sebastian from '../../img/other-companies/sebastian.svg'
import systemProfessional from '../../img/other-companies/System.svg'

const FlexDiv = styled.div`
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media screen and (min-width: 800px) {
    min-width: 50%;
  }
`

const StyledTitle = styled.h3`
  padding-top: 16px;
`

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (min-width: 800px) {
    border-right: #aaa solid 1px;
    border-left: #aaa solid 1px;
  }

  @supports (-ms-accelerator: true) {
    justify-content: space-around;
  }
`

const StyledLogoLink = styled.div`
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin: 0px 16px;
  width: 48px;
  height: 48px;

  @media screen and (min-width: 500px) {
    margin: 0px 8px;
    width: 64px; 
    height: 64px;
  }

  @media screen and (min-width: 800px) {
    margin: 0px 4px;
    width: 64px;
    height: 64px;
  }
`

const OtherCompanyLink = ({ link, img }) => (
  <a href={link}>
    <StyledLogoLink img={img} />
  </a>
)

export default () => (
  <FlexDiv>
    <StyledTitle>Inne Marki Wella</StyledTitle>
    <StyledDiv>
      <OtherCompanyLink link='https://www.systemprofessional.com/en-GB/' img={systemProfessional} />
      <OtherCompanyLink link='https://www.nioxin.com' img={nioxin} />
      <OtherCompanyLink link='https://www.ghdhair.com/' img={ghd} />
      <OtherCompanyLink link='https://www.sebastianprofessional.com' img={sebastian} />
      <OtherCompanyLink link='https://www.londaprofessional.com/countryselector/londa' img={londa} />
    </StyledDiv>
  </FlexDiv>
)
