import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import styled, { css } from 'styled-components'

import fb from '../img/temporary/facebook-logo.png';
import twitter from '../img/temporary/twitter-logo.png';
import youtube from '../img/temporary/youtube-logo.png';
import pinterest from '../img/temporary/pinterest-logo.png';
import instagram from '../img/temporary/instagram-logo.png';
import mail from '../img/temporary/mail-icon.png';

const StyledBar = styled.div`
  height: 40px; 
  width: 100%;
  background: #F7F7F7;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  img{
    max-height: 22px;
    &:hover{
      opacity: 0.6;
    }
  }
  
  a{
    margin-right: 9px;
    &:last-of-type{
      margin-right: 40px;
    }
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }

`;
export default function TopBar() {
  return (
    <StyledBar>
      <a href='https://pl-pl.facebook.com/DomWella/'> <img src={fb} alt="Facebook icon" /> </a>
      <a href='https://www.instagram.com/domwella/?hl=pl'> <img src={instagram} alt="Instagram icon" /> </a>
      {/* <a href=""> <img src={twitter} alt="Twitter icon"/> </a>
      <a href=""> <img src={pinterest} alt="Pinterest icon"/> </a>
      <a href=""> <img src={youtube} alt="Youtube icon"/> </a>
      <a href=""> <img src={mail} alt="Email icon"/> </a> */}
    </StyledBar>
  );
}