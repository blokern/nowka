import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';


const StyledTile = styled.div`
  width: 100%; 
  height: 45px;
  margin-bottom: 5px;
  background: #F7F7F7;
  color: #4a4a4a;
  font-size: 0.875rem;
  text-transform: uppercase;
  display: grid;
  grid-template-columns: 16px 1fr 10%;
  justify-items: start;
  align-items: center;

  @media screen and (min-width:400px) {
    grid-template-columns: 40px 1fr 10%;
  }

  ${props => props.product && ProductTileStyle}
`;

const ProductTileStyle = css`
  grid-template-columns: 1fr;

  div {
    width: 100%;
  }

  h5, h6 {
    line-height: 110%;
    width: 100%;
    text-align: center;
  }

  h6 {
    font-size: 0.8rem;
    text-transform: none;
  }
  
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: initial;
`

const StyledHref = styled.a`
  text-decoration: none;
  color: initial;
`

const handleClick = click => {
  if (typeof click === "function") {
    click();
  }
};

const arrow = (
  <svg height="8" width="8">
      <polygon points="0,0 0,8 7,4" fill="#4d4d4d" />
  </svg>
)

const MobileTile = ({ title, link, href, withArrow, click, subtitle, product, logos, children }) => {
  if (link) {
    return (
      <StyledLink to={link} >
        <StyledTile product={product} onClick={e => handleClick(click)}>
          <span />
          <div>
            <h5>{title}</h5>
            <h6>{subtitle}</h6>
          </div>
          <span> {withArrow ? arrow : ""} </span>
        </StyledTile>
      </StyledLink>
    );
  } else if (href) {
    return (
      <StyledHref href={href}>
        <StyledTile >
          <span />
          {title}
          <span> {withArrow ? arrow : ""} </span>
        </StyledTile>
      </StyledHref>
    );
  } else if(logos) {
    return (
      <StyledTile>
        <span />
        {children}
      </StyledTile>
    )
  } else {
    return (
      <StyledTile onClick={e => handleClick(click)}>
        <span />
        {title}
        <span> {withArrow ? arrow : ""} </span>
      </StyledTile>
    );
  }

};

export default MobileTile;