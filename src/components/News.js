import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { Link } from 'gatsby'

const StyledContainer = styled.div`
  padding: 32px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start; 
  border-bottom: solid 1px #cdcdcd;

  @media screen and (min-width: 1025px) {
    flex-direction: row;
    align-items: flex-end;
  }

  @media screen and (min-width: 1300px) {
    margin: 0 26px;
  }
`

const StyledTextContainer = styled.div`
  width: 100%;

  h3 {
    font-size: 1.6rem;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  span > p {
    margin-bottom: 40px;

    @media screen and (min-width: 1025px) {
      margin-bottom: 80px;
    }
  }

  div > p {
    margin-bottom: 40px;

    @media screen and (min-width: 1025px) {
      margin-bottom: 80px;
    }
  }

  > p:last-child {
    font-weight: 600;
  } 

  a {
    color: #4a4a4a;
  }

  @media screen and (min-width: 1025px) {
    width: 45%;
  }
`

const ImageContainer = styled.div`
  height: 340px;
  margin: 8px 0px;

  @media screen and (min-width: 1025px) {
    margin: 0px;
    height: 500px;
    width: 45%;
  }
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const StyledNewTag = styled.div`
  margin: 8px 0px;
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
  margin-bottom: 32px;
`

const News = ({ posts }) => {

  const smallArticles = posts.map((post, index) => {
    const { categories, date, title, excerpt, featured_media, tags, slug } = post.node
    const isNews = categories.find(category => category.name === 'News')

    let tagsToDisplay = 'Aktualności'

    if (tags) {
      const tagsNames = tags.map(tag => tag.name)
      tagsToDisplay = tagsNames.join(', ')
    }

    const Image = (
      <ImageContainer>
        <Link to={`/${slug}`}>
          <StyledImage src={featured_media.source_url} alt='' />
        </Link>
      </ImageContainer >
    )

    const Text = (
      <StyledTextContainer>
        {isNews && <StyledNewTag>Nowość</StyledNewTag>}
        <Link to={`/${slug}`}>
          <h3>{title}</h3>
          <ReactMarkdown escapeHtml={false} source={excerpt} />
        </Link>
        <p>{date}</p>
        <p>{tagsToDisplay}</p>
      </StyledTextContainer>
    )

    if (index % 2 === 0) {
      return (
        <StyledContainer>
          {Text}
          {Image}
        </StyledContainer>
      )
    }

    return (
      <StyledContainer>
        {Image}
        {Text}
      </StyledContainer>
    )
  })


  return smallArticles
}

export default News;