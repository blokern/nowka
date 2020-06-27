import React, { Component } from 'react';
import styled from 'styled-components';
import MobileTile from './MobileTile';
import ProductsMobile from './ProductsMobile';
import ProfessionalsMobile from './ProfessionalsMobile'

import facebook from '../../../img/temporary/facebook-logo.png'
import instagram from '../../../img/temporary/instagram-logo.png'

// Main fullscreen container
const Container = styled.div`
  visibility: ${props => props.visible ? "initial" : "hidden"};
  position: absolute;
  top: 62px; //should always match the navigation bar height
  left: 0;
  width: 100%;
  max-width: 450px;
  height: auto;
  background: white;
`;

const StyledLeftContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledLogoLink = styled.div`
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding: 4px;
  width: 18px; 
  height: 18px;
`

const StyledLogosDiv = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
`

const MoblieMenuLogos = () => (
  <StyledLogosDiv>
    <a href='https://pl-pl.facebook.com/DomWella/'>
      <StyledLogoLink img={facebook} />
    </a>
    <a href='https://www.instagram.com/domwella/?hl=pl'>
      <StyledLogoLink img={instagram} />
    </a>
  </StyledLogosDiv>
)

export default class MobileMenu extends Component {
  state = {
    visibleSection: '',
  }

  handleProductsClick = e => {
    this.setState({ visibleSection: 'products' });
  };

  handleProfessionalsClick = e => {
    this.setState({ visibleSection: 'professionals' });
  };

  handleReturnClick = e => {
    this.setState({ visibleSection: '' });
  };


  render() {

    const LogosTile = (
      <MobileTile logos>
        <MoblieMenuLogos />
      </MobileTile>
    )

    if (this.state.visibleSection === '') {
      return (
        <Container visible={this.props.visible}>
          <StyledLeftContainer>
            <MobileTile title={'Produkty'} withArrow click={this.handleProductsClick} />
            <MobileTile title={'Trendy'} link={"/trendy"} />
            <MobileTile title={'Historia'} link={"/historia"} />
            <MobileTile title={'Dla Profesjonalistów'} withArrow click={this.handleProfessionalsClick} />
            <MobileTile title={'Aktualności'} link={"/aktualnosci"} />
            <MobileTile title={'Sklep Wella'} href="https://sklepwella.orbico.pl/" />
            {LogosTile}
          </StyledLeftContainer>
        </Container>
      );
    }
    if (this.state.visibleSection === 'products') {
      return (
        <Container visible={this.props.visible}>
          <StyledLeftContainer>
            <ProductsMobile returnClick={this.handleReturnClick} />
            {LogosTile}
          </StyledLeftContainer>
        </Container>
      );
    }
    if (this.state.visibleSection === 'professionals') {
      return (
        <Container visible={this.props.visible}>
          <StyledLeftContainer>
            <ProfessionalsMobile returnClick={this.handleReturnClick} />
            {LogosTile}
          </StyledLeftContainer>
        </Container>
      );
    }

  }
}

