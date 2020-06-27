import React from 'react'
import styled from 'styled-components'

import TrendTile from './TrendTile'

import { trends } from '../../data/trendsData.json';

const StyledDiv = styled.div`
  text-align: center;
`

const TrendsContainer = styled.div`
  padding: 8px 0px 16px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

class TrendsSection extends React.Component {
  render() {
    const Trends = trends.map(trend => {
      const imageData = this.props.data.find(image => (
        image.name === trend.name
      ))

      return (
        < TrendTile
          key={trend.name}
          title={trend.title}
          link={trend.link}
          image={imageData.image.fluid}
        />
      )
    })

    return (
      <div>
        <StyledDiv>
        </StyledDiv>
        <TrendsContainer>
          {Trends}
        </TrendsContainer>
      </div>
    )
  }
}

export default TrendsSection;