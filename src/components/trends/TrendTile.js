import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const StyledDiv = styled.div`
  height: 320px;
  width: 320px;
  margin: 8px;
  overflow: hidden;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  cursor: pointer;

  :hover > div:first-child {
    transform: scale(1.2);
    transition: all 0.5s;
  }

  @media screen and (min-width: 768px) {
    height: 235px;
    width: 235px;
  }

  @media screen and (min-width: 1024px) {
    height: 305px;
    width: 305px;
  }

  @media screen and (min-width: 1400px) {
    height: 428px;
    width: 428px;
  }
`

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: rgba(0,0,0,0.8);
  }
`

const StyledGatsbyImg = styled(Img)`
  height: 100%;
  width: 100%;
`

const StyledTitle = styled.h3`
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  font-size: 1.2em;
  padding: 16px;
  margin: 15%;
  color: #eaeaea;
  border: 1px solid #eaeaea;
  border-left: 0 none;
  border-right: 0 none;
  user-select: none;
`

class TrendTile extends React.Component {
  state = {
    titleVisible: false
  }

  render() {
    const {
      image,
      title,
      link,
      centered
    } = this.props

    const showOrHideTitle = () => {
      this.setState(state => ({
        titleVisible: !state.titleVisible
      }))
    }

    return (
      <Link to='#'>
        <StyledDiv
          onMouseEnter={showOrHideTitle}
          onMouseLeave={showOrHideTitle}
        >
          <StyledGatsbyImg fluid={image} centered={centered} />
          <TextContainer>
            <StyledTitle show={this.state.titleVisible}>
              {title}
            </StyledTitle>
          </TextContainer>
        </StyledDiv>
      </Link>
    )
  }
}

export default TrendTile;

TrendTile.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}