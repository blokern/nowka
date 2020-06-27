import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Timeline from '../components/history/Timeline'
import BlackTile from '../components/history/BlackTile'
import TileWithImg from '../components/history/TileWithImg'

import { history } from '../data/historyData.json';

const ParagraphsDiv = styled.div`
  margin: 64px 32px;
  margin-bottom: 64px;
  font-size: 1em;
  line-height: 125%;
  text-align: center;

  @media screen and (min-width: 500px) {
    margin: 48px 80px;
  }

  @media screen and (min-width: 768px) {
    margin: 32px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 32px;
    font-size: 1.25em;
  }

  @media screen and (min-width: 1400px) {
    font-size: 1.5em;
  }
`

const GridContainer = styled.div`
  font-size: 12px;
  display: grid;
  justify-content: center;
  grid-gap: 8px;
  grid-template-columns: 320px;
  grid-template-rows: repeat(41, 320px);
  
  @media screen and (min-width: 768px) {
    font-size: 10px;
    grid-template-columns: repeat(3, 235px);
    grid-template-rows: repeat(18, 235px)
  }

  @media screen and (min-width: 1024px) {
    font-size: 12px;
    grid-template-columns: repeat(3, 305px);
    grid-template-rows: repeat(18, 305px)
  }

  @media screen and (min-width: 1400px) {
    font-size: 16px;
    grid-template-columns: repeat(3, 428px);
    grid-template-rows: repeat(18, 428px)
  }
`

export default ({ data }) => {

  const imgArray = data.allFile.edges.map(image => ({
    name: image.node.name,
    image: image.node.childImageSharp
  }));

  let dataForTimeline = []
  history.forEach(element =>
    element.yearToTimeline && dataForTimeline.push({
      year: element.yearToTimeline,
      row: element.gridRow,
    })
  )

  const Tiles = history.map(tile => {
    if (typeof tile.subtitle === 'string') {
      return (
        <BlackTile
          key={tile.title}
          date={tile.date}
          title={tile.title}
          subtitle={tile.subtitle}
        />
      )
    } else {
      const imageData = imgArray.find(image => {
        return (
          image.name === tile.imageName
        )
      })

      return (
        <TileWithImg
          key={tile.title}
          date={tile.date}
          title={tile.title}
          text={tile.text}
          start={tile.start}
          width={tile.width}
          centered={tile.centered}
          image={imageData.image.fluid}
        />
      )
    }
  })

  return (
    <Layout pageTitle='Historia'>
      <ParagraphsDiv>
        <p>
          For over 130 years, Wella has been delivering innovations and services that enable hairdressers’ creativity.
        </p>
        <p>
          The company’s story begins in 19th century Germany, with the vision and passion of one hairdresser, Franz Stroher…
        </p>
      </ParagraphsDiv>
      <Timeline data={dataForTimeline} />
      <GridContainer>
        {Tiles}
      </GridContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile (filter: {relativeDirectory: { eq: "history" }}){
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