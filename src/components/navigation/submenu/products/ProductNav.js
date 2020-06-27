import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

const StyledDiv = styled.div`
  border: 0.5px solid #ddd;
  height: 100%;
  width: 100%;
  color: #4d4d4d;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  ${props =>
    props.horizontal
      ? 'background-position-y: center;'
      : 'background-position-x: center;'};
`

const horizontalElementStyle = css`
  padding-left: 50%;
  padding-top: 25%;
  justify-content: space-between;
`

const StyledGradientBackgroundWithFlex = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.horizontal ? 'flex-start;' : 'center;')}
  justify-content: flex-end;
  ${props => props.horizontal && horizontalElementStyle}

  :hover {
    background: linear-gradient(to bottom, rgba(200,0,60,0) 0%, rgba(200,0,60,0.2) 100%);
  }
`

const StyledTitle = styled.div`
  margin-right: 8px;
  font-size: 14px;
  line-height: 120%;
  text-transform: uppercase;
  font-weight: 500;
`

const StyledSubtitle = styled.div`
  margin-right: 8px;
  font-size: 12px;
  line-height: 120%;
`

const StyledPlus = styled.div`
  align-self: flex-end;
  line-height: 100%;
  margin: 0px 4px 4px 0px;
`

export default function ProductNav({
  horizontal,
  icon,
  title,
  subtitle,
  link,
}) {
  return (
    <Link to={link}>
      <StyledDiv horizontal={horizontal} image={icon}>
        <StyledGradientBackgroundWithFlex horizontal={horizontal}>
          <StyledTitle>{title}</StyledTitle>
          <StyledSubtitle>{subtitle}</StyledSubtitle>
          <StyledPlus>+</StyledPlus>
        </StyledGradientBackgroundWithFlex>
      </StyledDiv>
    </Link>
  )
}

ProductNav.defaultProps = {
  horizontal: false,
  subtitle: '',
}

ProductNav.propTypes = {
  horizontal: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  link: PropTypes.string.isRequired,
}
