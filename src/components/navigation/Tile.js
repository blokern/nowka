import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import styled from 'styled-components'

const StyledDiv = styled.div`
  border: 0.5px solid #ddd;
  height: 100%;
  width: 100%;
  position: relative;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  display: flex;
  overflow: hidden;
  align-items: flex-end;
`

const StyledGradientBackgroundWithFlex = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  :hover {
    background: linear-gradient(to bottom, rgba(200,0,60,0) 0%, rgba(200,0,60,0.2) 100%);
  }
`

const StyledTextDiv = styled.div`
  width: 100%;
  background-color: #fff;
  color: #000;
  display: flex;
  justify-content: space-between;
`

const StyledTitle = styled.div`
  padding: 8px 16px;
  font-size: 12px;
  text-transform: uppercase;
`

const StyledPlus = styled.div`
  padding: 8px;
  align-self: flex-end;
`

export default function ProductNav({
  icon,
  title,
  link
}) {
  return (
    <Link to={link}>
      <StyledDiv image={icon}>
        <StyledTextDiv>
          <StyledTitle>{title}</StyledTitle>
          <StyledPlus>+</StyledPlus>
        </StyledTextDiv>
        <StyledGradientBackgroundWithFlex />
      </StyledDiv>
    </Link>
  )
}

ProductNav.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}