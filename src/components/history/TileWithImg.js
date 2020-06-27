import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'

import Post from './Post'

const StyledDiv = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  text-align: center;
  text-transform: uppercase;
  grid-column: 0 / span 1;
  background-color: #2d2d2d;
  color: #ddd;
  position: relative;
  cursor: pointer;

  ${props => props.zoomImage && (
    `> div:first-child {
      transform: scale(1.2);
      transition: all 0.5s;
    }`
  )
  }

  @media screen and (min-width: 768px) {
    grid-column: ${props => `${props.start} / span ${props.width}`};
  }
`

const StyledDate = styled.h3`
  font-size: 1.4em;
  position: absolute;
  left: 0;
  top: 45%;
  z-index: 2;
  background-color: #000;
  display: block;
  padding: 0px 8px;
  user-select: none;
`

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.darkBacgroundVisible ? 'rgba(0,0,0,0.8)' : 'transparent'};
`
const centeredImg = css`
  height: 100%;
  width: 100%;
`

const StyledGatsbyImg = styled(Img)`
  ${props => props.centered && centeredImg}
`

const StyledTitle = styled.h3`
  visibility: ${props => props.show ? 'visble' : 'hidden'};
  font-size: 1.2em;
  padding: 16px;
  margin: 15%;
  border: 1px solid #eaeaea;
  border-left: 0 none;
  border-right: 0 none;
  user-select: none;
`

class TileWithImg extends React.Component {
  state = {
    clicked: false,
    titleVisible: false
  }

  showOrHideTitle = newState => {
    this.setState({
      titleVisible: newState
    })
  }

  showOrHidePost = newState => {
    this.setState({
      clicked: newState
    })
  }

  render() {
    const PostToShow = (this.state.clicked && (
      <Post
        text={this.props.text}
        title={this.props.title}
        image={this.props.image}
        close={() => this.showOrHidePost(false)}
      />
    ))

    return (
      <Fragment>
        <StyledDiv
          start={this.props.start}
          width={this.props.width}
          onClick={() => this.showOrHidePost(true)}
          onMouseEnter={() => this.showOrHideTitle(true)}
          onMouseLeave={() => this.showOrHideTitle(false)}
          zoomImage={this.state.titleVisible}
        >
          <StyledGatsbyImg fluid={this.props.image} centered={this.props.centered} />
          <StyledDate>
            {this.props.date}
          </StyledDate>
          <TextContainer darkBacgroundVisible={this.state.titleVisible}>
            <StyledTitle show={this.state.titleVisible}>
              {this.props.title}
            </StyledTitle>
          </TextContainer>
        </StyledDiv>
        {PostToShow}
      </Fragment>
    )
  }
}

export default TileWithImg;

TileWithImg.defaultProps = {
  centered: true
}

TileWithImg.propTypes = {
  image: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  centered: PropTypes.bool
}