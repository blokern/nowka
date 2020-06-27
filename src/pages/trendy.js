import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import TrendsSection from '../components/trends/TrendsSection'

import trends_img from '../img/temporary/trends_placeholder.jpg'

const TempSlider = styled.div`
  width: 100%;
  height: 464px;
  background-image: url(${trends_img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const Container = styled.div`
  max-width: 90%;
  margin: auto;

  @media screen and (min-width: 1300px) {
    max-width: 1200px;
  }
`

const StyledTitle = styled.h3`
  text-transform: uppercase;
  text-align: center;
  font-size: 1.75em;
  padding: 8px 0px;
`

const StyledParagraph = styled.p`
  max-width: 750px;
  margin: auto;
  padding-bottom: 8px;
  text-align: center;
`

export default ({ data }) => {
  const imgArray = data.allFile.edges.map(image => ({
    name: image.node.name,
    image: image.node.childImageSharp
  }));

  return (
    <Layout pageTitle='Trendy'>
      <TempSlider />
      <Container>
        <div>
          <StyledTitle>
            Odwiedź Świat TrendVision
          </StyledTitle>
          <StyledParagraph>
            Zapraszamy do wzięcia udziału w jednej z najbardziej prestiżowych imprez fryzjerskich na świecie.
          </StyledParagraph>
          <StyledParagraph>
            Jeśli Twoją pasją jest koloryzacja i stylizacja włosów - wystartuj w konkursie! Olśnij świat swoją kreatywną wizją i wygraj niepowtarzalne nagrody!
          </StyledParagraph>
        </div>
        <TrendsSection data={imgArray} />
      </Container>
    </Layout >
  )
}

export const query = graphql`
  query {
    allFile (filter: {relativeDirectory: { eq: "trends" }}){
      edges {
        node {
          name,
          childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
          }
        }
      }
    }
  }
`