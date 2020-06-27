import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const StyledDiv = styled.div`
  padding: 40px 0px;
  margin: auto;
  max-width: 80%;

  @media screen and (min-width: 1200px) {
    max-width: 900px
  }

  h1, h2 {
    margin: 32px 0px;
    font-size: 1.5rem;
  }

  h3, h4 {
    margin: 16px 0px;
    font-size: 1.25rem;
  }

  h5 {
    margin: 8px 0px;
  }

  ul {
    margin-left: 32px;
    list-style-type: disc;
  }

  ol {
    margin-left: 32px;
  }

  li {
    margin: 16px;

    li {
      list-style-type: circle;
    }
  }
`

const StyledTitle = styled.div`
  margin-bottom: 40px;
  font-size: 2rem;
`

export const WordpressPage = ({ title, content }) => {
  return (
    <StyledDiv>
      <StyledTitle>
        {title}
      </StyledTitle>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </StyledDiv>
  )
}

WordpressPage.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}