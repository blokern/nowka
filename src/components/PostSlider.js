import React, { Component } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { ellipsis } from 'polished'
import { Link } from 'gatsby'
import ReactMarkdown from 'react-markdown'

import rightArrow from '../img/rightArrow.svg'
import leftArrow from '../img/leftArrow.svg'

// TODO: make this use gatsby-image

// const smallRightArrow = (
//   <svg height="20" width="20">
//     <circle cx="10" cy="10" r="10" fill="rgba(0,0,0, 0.2)" />
//     <polygon points="8,7 8,13 13,10" fill="#ffffff" />
//   </svg>
// )

// const smallLeftArrow = (
//   <svg height="20" width="20">
//     <circle cx="10" cy="10" r="10" fill="rgba(0,0,0, 0.2)" />
//     <polygon points="12,7 12,13 7,10" fill="#ffffff" />
//   </svg>
// )

const sliderSettings = {
  dots: true,
  arrows: true,
  nextArrow: <img src={rightArrow} alt='right arrow' />,
  prevArrow: <img src={leftArrow} alt='left arrow' />,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        autoplay: false
      }
    },
  ]
}

const SliderWrapper = styled.div`

  .slick-dots {
    bottom: 12px;

    li {
      position: relative;
      bottom: 0.5px;
      button:before {
        color: #fff;
        font-size: 4px;
        opacity: 0.9;
      }
    }

    .slick-active {
      bottom: 0;
      button:before {
        color: #fff;
        font-size: 6px;
      }
    }
  }
  .slick-prev {
    left: 20px;
    width: 40px;
    height: 40px;
    z-index: 3;
    @media screen and (min-width: 750px) {
      left: 24px;
    }
    @media screen and (min-width: 1025px) {
      left: 40px;
    }
    @media screen and (min-width: 1240px) {
      left: 64px;
    }
    @media screen and (min-width: 1360px) {
      left: 128px;
    }
  }
  .slick-next {
    right: 20px;
    width: 40px;
    height: 40px;
    z-index: 3;
    @media screen and (min-width: 750px) {
      right: 24px;
    }
    @media screen and (min-width: 1025px) {
      right: 40px;
    }
    @media screen and (min-width: 1240px) {
      right: 64px;
    }
    @media screen and (min-width: 1360px) {
      right: 128px;
    }
  }
`

const PostImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const SlideContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 0;
  padding-top: 36.25%;

  @media screen and (max-width: 1024px) {
    height: 50vh;
  }
`

const StyledContentContainer = styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 10;
  -webkit-user-drag: none;
`

const StyledTextContainer = styled.div`
  position: relative;
  z-index: 11;
  height: 100%;
  width: 65%;
  max-width: 920px;
  margin: 0 auto;
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  @media screen and (min-width:450px) {
    width: 70%;
  }

  @media screen and (min-width:600px) {
    width: 75%;
  }

  @media screen and (min-width:650px) {
    width: 80%;
  }

  @media screen and (min-width: 750px) {
    justify-content: center;
    padding-bottom: 0;
  }
`

const StyledPostTitle = styled.h1`
  margin-bottom: 24px;
  color: #dc4657;
  font-weight: bold;
  text-transform: uppercase;
  max-width: 100%;
  max-height: 80%;
  line-height: 100%;
  font-size: 2.5rem;

  @media screen and (min-width:600px) {
    max-width: 80%;
    font-size: 3rem;
  }

  @media screen and (min-width:750px) {
    max-width: 300px;
  }

  @media screen and (min-width:1024px) {
    ${ellipsis('450px')};
  }
`

const StyledExcerpt = styled.h3`
  color: #4B4B4B;
  max-width: 400px;
  font-size: 0.75rem;

  p {
    @media screen and (max-width:1024px) {
      display: none;
    }
  }
`

const StyledNewTag = styled.div`
  margin-top: 0;
  margin-bottom: 16px;
  background-color: #cd1041;
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  font-size: 1.125rem;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 4px 0;
  width: 102px;

  @media screen and (min-width:600px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width:750px) {
    margin-top: 22px;
    margin-bottom: 0;
  }
`

// const stripHtmlTags = string => string.replace(/<\/?[^>]+(>|$)/g, '')

const isNews = post =>
  post.categories.find(category => category.name === 'News')

class PostSlider extends Component {
  state = {
    clientXonMouseDown: null,
    clientYonMouseDown: null,
  }

  handleLinkMouseDown = e => {
    this.setState({
      clientXonMouseDown: e.clientX,
      clientYonMouseDown: e.clientY,
    })
    e.preventDefault() // stops weird link dragging effect
  }

  handleLinkClick = e => {
    e.stopPropagation()
    if (
      this.state.clientXonMouseDown !== e.clientX ||
      this.state.clientYonMouseDown !== e.clientY
    ) {
      // prevent link click if the element was dragged
      e.preventDefault()
    }
  }

  render() {
    const { posts } = this.props
    return (
      <SliderWrapper>
        <Slider {...sliderSettings}>
          {posts
            .slice(0, 10)
            .filter(({ node: post }) => !!post.featured_media)
            .map(({ node: post }) => (
              <SlideContainer key={post.id}>
                <StyledContentContainer
                  to={`/${post.slug}`}
                  onMouseDown={this.handleLinkMouseDown}
                  onClick={this.handleLinkClick}
                >
                  <StyledTextContainer>
                    <StyledPostTitle>{post.title}</StyledPostTitle>
                    <StyledExcerpt>
                      <ReactMarkdown escapeHtml={false} source={post.excerpt} />
                    </StyledExcerpt>
                    {isNews(post) ? <StyledNewTag>Nowość</StyledNewTag> : null}
                  </StyledTextContainer>
                  <PostImage
                    src={post.featured_media.source_url}
                    alt={post.title}
                  />
                </StyledContentContainer>
              </SlideContainer>
            ))}
        </Slider>
      </SliderWrapper>
    )
  }
}

export default PostSlider
