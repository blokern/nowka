import React from 'react'
import styled from 'styled-components'

import Title from "./Title"

import studioWella from '../../img/studio-wella.jpg'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`

const TextContainer = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 16px;
  padding-top: 0px;

  @media screen and (min-width: 960px) {
    max-width: 50%;
    padding: 48px 0px;
  }
`

const StyledImg = styled.img`
  max-width: 100%;
  padding: 16px;
`

export default () => (
  <div>
    <Title>Studio Wella</Title>
    <Container>
      <TextContainer>
        <p>
          Od prawie 20 lat w centrum Warszawy mieści się jedno z największych centrów szkoleniowych Wella. STUDIO WELLA ma siedzibę przy ulicy Smoczej 1. Posiada dwie sale teoretyczne i dwie sale praktyczne, które każdego roku goszczą setki fryzjerów. Wszystkie pomieszczenia wyposażone są w najnowocześniejszy sprzęt i innowacyjne produkty, które dodatkowo motywują stylistów i pobudzaja ich kreatywność.
        </p>
        <p>
          Fryzjerzy przyjeżdżający do Studia Wella poznają najnowsze techniki koloryzacji oraz zastosowanie produktów, wymieniają się doświadczeniami, dzięki czemu inspirują się i odkrywają w sobie nowe talenty. Studio Wella to nie tylko miejsce szkoleń, ale takze miejsce pokazów, sesji zdjąciowych i konferencji prasowych. Niejednokrotnie na Smoczej pojawiały się ekipy telewizyjne, przygotowujące programy promujące świat fryzjerstwa wspierany produktami Wella.
        </p>
        <p>
          Studio Wella spełnia swoją misję dbając o to, aby każdy z uczestników szkoleń wyjechał bogatszy o nowe doświadczenia i umiejętności, które będzie mógł wykorzystywać w codziennej pracy w swoim salonie.
        </p>
      </TextContainer>
      <StyledImg src={studioWella} alt='' />
    </Container>
  </div>
)