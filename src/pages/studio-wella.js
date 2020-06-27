import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Banner from '../components/for-professionals/Banner'

import bannerBackground from '../img/temporary/bannerbg.jpg'
import StudioWellaSection from '../components/for-professionals/StudioWellaSection'
import InstructorsSection from '../components/for-professionals/InstructorsSection'

const Container = styled.div`
  max-width: 80%;
  margin: auto;

  @media screen and (min-width: 900px) {
      max-width: 90%;
    }

  @media screen and (min-width: 1300px) {
    max-width: 1200px;
  }
`

export default ({ data }) => {
  const instructorPhotos = data.allFile.edges.map(image => ({
    name: image.node.name,
    image: image.node.childImageSharp
  }));

  return (
    <Layout pageTitle='Studio Wella'>
      <Container>
        <StudioWellaSection />
        <InstructorsSection data={instructorPhotos} />
        <Banner backgroundImg={bannerBackground}>Sprawdź ofertę for-professionals</Banner>
        <Banner>Skontaktuj się z doradcą handlowym</Banner>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile (filter: {relativeDirectory: { eq: "instructors" }}){
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