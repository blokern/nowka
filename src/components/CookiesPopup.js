import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import close from '../img/close.svg'

const StyledContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 2;
`

const StyledPopupDiv = styled.div`
  color: #fff;
  background-color: #cd143e;
  width: 90%;
  margin: auto;
  font-size: 0.8rem;
  padding: 8px;
  position: relative;
  user-select: none;

  @media screen and (min-width: 1240px) {
    width: 1200px;
  }
`

const StyledImg = styled.img`
  fill: #fff;
  max-width: 16px;
  margin-right: 8px;
  position: absolute;
  right: 0px;

  :hover {
    cursor: pointer;
  }
`

const StyledParagraph = styled.p`
  padding: 16px 32px 0px 16px;
  text-align: center;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: underline;

  :hover {
    color: #d7d7d7;
  }
`

class CookiesPopup extends React.Component {
  state = {
    cookieAccepted: true
  }

  componentDidMount() {
    // setState is CDM is a bad practice but we need to use it here to make sure the code containing document reference only runs in the browser which makes the additional render unavoidable with gatsby
    this.setState({ cookieAccepted: this.getCookie('cookiesAccepted') })
  }

  getCookie = cookieName => {
    const cookiestring = RegExp('' + cookieName + '[^;]+').exec(document.cookie)
    return decodeURIComponent(
      !!cookiestring ? cookiestring.toString().replace(/^[^=]+./, '') : ''
    )
  }

  setCookies = () => {
    const cookieValue = 'cookiesAccepted=true; '
    const date = new Date()
    const days = 365
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    const expires = 'expires=' + date.toUTCString()
    document.cookie = cookieValue + expires + '; path=/'
  }

  closePopup = () => {
    this.setState({
      cookieAccepted: true,
    })
    this.setCookies()
  }

  render() {
    if (!this.state.cookieAccepted) {
      return (
        <StyledContainer>
          <StyledPopupDiv>
            <StyledImg
              src={close}
              alt="close button"
              onClick={this.closePopup}
            />
            <StyledParagraph>
              {`This website uses cookies to give you a better user experience. `}
              <StyledLink to="/about-cookies">Find out more</StyledLink>
              {` about how we use cookies.`}
            </StyledParagraph>
            <StyledParagraph>
              Please remember that if you turn cookies off, certain features of
              this website may not be available to you.
              <br /> Otherwise, by using this website, we’ll assume you’re OK to
              continue.
            </StyledParagraph>
          </StyledPopupDiv>
        </StyledContainer>
      )
    }

    return <React.Fragment />
  }
}

export default CookiesPopup
