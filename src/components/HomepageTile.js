import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledTileLink = styled(Link)`
  height: 250px;
  width: 250px;
  margin: 8px;
  overflow: hidden;
  text-align: center;
  position: relative;
  cursor: pointer;

  @media screen and (min-width: 400px) {
    height: 350px;
    width: 350px;
  }

  @media screen and (min-width: 670px) {
    height: 275px;
    width: 275px;
  }

  @media screen and (min-width: 1240px) {
    height: 250px;
    width: 250px;
  }

  @media screen and (min-width: 1360px) {
    height: 300px;
    width: 300px;
  }

  :hover > img:first-child {
    transform: scale(1.15);
    transition: all 0.5s;
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
    background-color: rgba(205,20,62,0.65);
  }
`

const StyledTileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const StyledTitle = styled.div`
  visibility: ${props => props.show ? 'visble' : 'hidden'};
  font-size: 0.9rem;
  padding: 16px;
  margin: 10%;
  color: #eaeaea;
  user-select: none;

  h3 {
    font-size: 1.875rem;
    line-height: 100%;
    font-weight: bold;
    padding-bottom: 8px;
    margin-bottom: 8px;
    border-bottom: 1px solid #eaeaea;
    text-transform: uppercase;
  }
`

class HomePageTile extends React.Component {
  state = {
    titleVisible: false
  }

  render() {
    const {
      post
    } = this.props

    const showOrHideTitle = () => {
      this.setState(state => ({
        titleVisible: !state.titleVisible
      }))
    }

    const findFirstParagraph = (string) => {
      const startNumber = string.search('<p>')
      const numberOfLetters = 100;
      const maxEndNumber = startNumber + numberOfLetters;
      const endOfPargaraph = string.slice(startNumber + 3).search('<');
      const endNumber = Math.min(maxEndNumber, endOfPargaraph);

      if (startNumber === -1 || endOfPargaraph === -1) {
        return
      }

      const foundParagraph = string.substr(startNumber + 3, endNumber)


      if (endNumber === endOfPargaraph) {

        return foundParagraph
      }

      return `${foundParagraph}...`
    }

    return (
      <StyledTileLink to={`/${post.slug}`}>
        <StyledTileImage src={post.featured_media.source_url} alt={post.title} />
        <TextContainer
          onMouseEnter={showOrHideTitle}
          onMouseLeave={showOrHideTitle}
        >
          <StyledTitle show={this.state.titleVisible}>
            <h3>{post.title}</h3>
            <span>{findFirstParagraph(post.excerpt)}</span>
          </StyledTitle>
        </TextContainer>
      </StyledTileLink>
    )
  }
}

export default HomePageTile
