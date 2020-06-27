import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Img from 'gatsby-image'

const StyledInstructor = styled.div`
  width: 100%;
  max-width: 432px;
  padding: 16px;

  @media screen and (min-width: 1024px) {
    padding: 40px;
  }
`

const StyledTitle = styled.div`
  margin-top: 8px;
  width: 270px;
  font-size: 20px;
  font-weight: bold;
  @media screen and (min-width: 1024px) {
    width: 450px;
    font-size: 24px;
  }
`

const StyledSubtitle = styled.div`
  width: 270px;
  font-size: 16px;
  font-weight: normal;
  @media screen and (min-width: 1024px) {
    width: 450px;
    font-size: 20px;
  }
`

const Instructor = ({ photo, title, subtitle, link }) => {
  let image;
  if (link === '') {
    image = <Img fluid={photo} />
  } else {
    image = (
      <a href={link}>
        <Img fluid={photo} />
      </a>
    )
  }

  return (
    <StyledInstructor>
      {image}
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
    </StyledInstructor>
  );
}

export default Instructor;

Instructor.defaultProps = {
  link: '',
  photo: ''
}

Instructor.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  link: PropTypes.string,
}