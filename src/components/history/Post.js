import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import AriaModal from 'react-aria-modal'

import xIcon from '../../img/closeX.svg'

const StyledContentDiv = styled.div`
  position: relative;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 720px;
    min-height: 40vh;
    max-height: 100vh;
  }

  @media screen and (min-width: 960px) {
    max-width: 920px
  }

  @media screen and (min-width: 1140px) {
    max-width: 1100px
  }
`

const StyledImgDiv = styled.div`
  width: 100%;
  max-width: 500px;

  @media screen and (min-width: 468px) {
    padding: 0px 32px;
  }

  @media screen and (min-width: 768px) {
    padding: 0px;
    max-height: 100%;
  }
`

const StyledGatsbyImg = styled(Img)`
  max-height: 100vh;
`

const StyledTextDiv = styled.div`
  padding: 24px;
  max-width: 550px;

  @media screen and (min-width: 768px) {
    padding: 32px;
    max-width: 50%;
  }
`

const StyledImg = styled.img`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 0; 
  right: 0;
  background-color: rgba(255,255,255,0.5);
  cursor: pointer;
`

const StyledTitle = styled.h3`
  text-transform: uppercase;
  padding: 8px;
  line-height: 100%;
  font-size: 1.6em;
  user-select: none;   

  @media screen and (min-width: 960px) {
    font-size: 2em;
  }
`

const StyledParagraph = styled.p`
  padding: 8px;
  line-height: 100%;
  font-size: 1em;
  user-select: none;   

  @media screen and (min-width: 960px) {
    font-size: 1.2em;
  }
`

const Post = (({
  close,
  text,
  title,
  image
}) => {

  return (
    <AriaModal
      titleText={title}
      onExit={close}
      initialFocus=".toFocus"
      verticallyCenter
    >
      <StyledContentDiv>
        <StyledImgDiv>
          <StyledGatsbyImg fluid={image} />
        </StyledImgDiv>
        <StyledTextDiv className='toFocus'>
          <StyledTitle>{title}</StyledTitle>
          <StyledParagraph>{text}</StyledParagraph>
        </StyledTextDiv>
        <StyledImg src={xIcon} onClick={close} />
      </StyledContentDiv>
    </AriaModal>
  )
})

export default Post;

Post.propTypes = {
  image: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired
}