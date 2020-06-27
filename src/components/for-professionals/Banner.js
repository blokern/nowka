import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledBanner = styled.div`
  margin: 48px 0px;
  width: 100%;
  background-color: ${props => props.backgroundColor};
  background-image: url(${props => props.backgroundImg});
  background-repeat: no-repeat;
`

const StyledDiv = styled.div`
  padding: 8px;
`

const StyledTextContainer = styled.div`
  padding: 8px;
  border: 1px solid rgba(255, 255, 255, 0.8);
`

const StyledText = styled.div`
  max-width: 450px;
  margin: auto;
  color:  #fff;
  opacity: 0.9;
  text-transform: uppercase;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  @media screen and (min-width: 1024px) {
    font-size: 40px;
  }
`

const Banner = ({ children, backgroundColor, backgroundImg }) => (
  <StyledBanner backgroundColor={backgroundColor} backgroundImg={backgroundImg}>
    <StyledDiv>
      <StyledTextContainer>
        <StyledText>
          {children}
        </StyledText>
      </StyledTextContainer>
    </StyledDiv>   
  </StyledBanner>
)

export default Banner;

Banner.propTypes = {
  backgroundColor: PropTypes.string,
  backgroundImg: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Banner.defaultProps = {
  backgroundColor: '#000',
  backgroundImg: 'none'
};