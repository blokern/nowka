import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Title from '../components/for-professionals/Title'

import { advisors } from '../data/advisorsData.json';

const Container = styled.div`
  max-width: 95%;
  margin: auto;

  @media screen and (min-width: 400px) {
    max-width: 90%;
  }

  @media screen and (min-width: 1300px) {
    max-width: 1200px;
  }
`

const StyledParagraph = styled.p`
  padding: 8px 0px;
  /* text-align: center; */
`

const AdvisorsContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 32px;
`

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 32% 40% 28%;
  grid-gap: 1px;
  margin-bottom: 1px;
`

const StyledHeaderDiv = styled.div`
  padding: 8px;
  font-weight: bold;
  line-height: 100%;
  text-align: center;
  color: #fff;
  background-color: #cd143e;

  @media screen and (min-width: 400px) {
    padding: 16px;
  }
`

const StyledAdvisorDiv = styled.div`
  padding: 8px;
  width: 100%;
  height: 100%;
  font-size: 0.8rem;
  line-height: 150%;
  text-align: center;
  background-color: ${props => props.bgcolor};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 400px) {
    padding: 16px;
  }

  @media screen and (min-width: 600px) {
    font-size: 1rem;
  }
`

const StyledPhoneLink = styled.a`
  height: 100%;
  color: #4a4a4a;
`

const Advisors = advisors.map(
  ({ id, name, cities, phone }) => {
    const backgroundColor = (id % 2 === 0) ? '#f7f7f7' : '#efefef'

    return (
      <GridContainer key={id}>
        <StyledAdvisorDiv bgcolor={backgroundColor}>
          {name}
        </StyledAdvisorDiv>
        <StyledAdvisorDiv bgcolor={backgroundColor}>
          {cities}
        </StyledAdvisorDiv>
        <StyledPhoneLink href={`tel:${phone}`}>
          <StyledAdvisorDiv bgcolor={backgroundColor}>
            {phone}
          </StyledAdvisorDiv>
        </StyledPhoneLink>
      </GridContainer>
    )
  }
)

export default () => (
  <Layout pageTitle='Doradcy Handlowi'>
    <Container>
      <Title>Doradcy handlowi</Title>
      <StyledParagraph>Skontaktuj się z naszym doradcą handlowym</StyledParagraph>
      <AdvisorsContainer>
        <GridContainer>
          <StyledHeaderDiv>Doradca handlowy</StyledHeaderDiv>
          <StyledHeaderDiv>Region</StyledHeaderDiv>
          <StyledHeaderDiv>Telefon</StyledHeaderDiv>
        </GridContainer>
        {Advisors}
      </AdvisorsContainer>
    </Container>
  </Layout>
)