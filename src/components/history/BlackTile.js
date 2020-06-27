import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledDiv = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #000;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
`

const StyledDate = styled.h3`
  font-size: 3em;
  border: 2px solid #272727;
  border-left: 0 none;
  border-right: 0 none;
  width: 50%;
`

const StyledTitle = styled.h3`
  font-size: 2.4em;
  line-height: 115%;
  width: 75%;
  margin: 4%;
`

const StyledSubtitle = styled.p`
  font-size: 1.4em;
  width: 75%;
`

const BlackTile = (({
  date,
  title,
  subtitle,
  className
}) => (
    <StyledDiv>
      <StyledDate>{date}</StyledDate>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
    </StyledDiv>
  ));

export default BlackTile;

BlackTile.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}