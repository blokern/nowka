import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import logo from '../../img/temporary/wella-logo.png'
import mobileIcon from '../../img/temporary/menu-mobile-icon.png'
import ProductsSubmenu from './submenu/products/ProductsSubmenu'
import ProfessionalsSubmenu from './submenu/professionals/ProfessionalsSubmenu'
import MobileMenu from './mobile/MobileMenu';
import Sticky from 'react-stickynode'

const StyledNavBar = styled.div`
  height: ${props => (props.fixed ? '114px' : '144px')};
  width: 100%;
  padding-top: ${props => (props.fixed ? '16px' : '28px')};
  /* position: ${props => (props.fixed ? 'fixed' : 'relative')}; */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background: white;
  top: 0;
  z-index: 15;

  ${props => props.mobile && StyledMobileNavBar};

  .logo {
    width: ${props => (props.fixed ? '80px' : '96px')};
    height: ${props => (props.fixed ? '50px' : '60px')};
    @media screen and (max-width: 1024px) {
      width: 80px;
      height: 50px;
    }
  }

  .mobile-menu {
    cursor: pointer;
    margin-left: 16px;

    @media screen and (min-width: 400px) {
      margin-left: 40px;
    }
  }
`

const StyledMobileNavBar = css`
  padding: 2px;
  height: 62px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  justify-items: start;
`

const StyledLogoLink = styled(Link)`
  cursor: pointer;
  margin-bottom: ${props => (props.fixed ? '0' : '10px')};
  justify-self: center;
  @media screen and (max-width: 1024px) {
    height: 50px;
    margin-bottom: 0;
  }
`

const StyledMenu = styled.nav`
  display: flex;
  width: 946px;
  justify-content: space-between;
  list-style-type: none;
  text-transform: uppercase;
  height: 38px;

  li {
    height: ${props => (props.fixed ? '38px' : '40px')};
    line-height: ${props => (props.fixed ? '38px' : '40px')};
    cursor: pointer;
  }
  
  a{
    color: black;
    padding: 0 20px;
    &:hover{
      color: #C7003B;
    }
  }

  button {
    color: black;
  }

  .products {
    button{
      font-weight: ${props => (props.selected === 'products' ? '700' : '400')};
      background-color: ${props => (props.selected === 'products' ? '#e5c2cb' : 'transparent')};
    }
  }

  .trends {
    a{
      font-weight: ${props => (props.selected === 'trends' ? '700' : '400')};
    }
  }
  
  .inside {
    a{
      font-weight: ${props => (props.selected === 'inside' ? '700' : '400')};
    }
  }

  .professionals {
    button{
      font-weight: ${props => props.selected === 'professionals' ? '700' : '400'};
      background-color: ${props => (props.selected === 'professionals' ? '#e5c2cb' : 'transparent')};
    }
  }

  .news {
    a{
      font-weight: ${props => (props.selected === 'news' ? '700' : '400')};
    }
  }

  .shop {
    a{
      font-weight: ${props => (props.selected === 'shop' ? '700' : '400')};
    }
  }
  
  .products-button {
    height: ${props => (props.fixed ? '38px' : '40px')};
    line-height: ${props => (props.fixed ? '38px' : '40px')};
    border: none; 
    background: none; 
    text-transform: uppercase;
    padding: 0 20px;
    font-size: 1rem;
    cursor: pointer;
    outline: none;
    &:hover{
      color: #C7003B;
    }
  }
`

const StyledMobileMenu = styled.nav``

export default class Navigation extends Component {
  state = {
    mobile: true,
    visibleSubmenu: '',
    mobileVisible: false,
    currentSection: '',
  }

  componentDidMount() {
    this.setMobileDisplay()
    window.addEventListener('scroll', this.setMenuPosition)
    window.addEventListener('resize', this.setMobileDisplay)
    window.addEventListener('click', this.hideMenu)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setMenuPosition)
    window.removeEventListener('resize', this.setMobileDisplay)
    window.addEventListener('click', this.hideMenu)
  }

  setMobileDisplay = e => {
    if (window.innerWidth < 1025) {
      this.setState({ mobile: true })
      this.setState({ fixed: true })
    } else {
      this.setState({ mobile: false })
    }
  }

  setMenuPosition = e => {
    if (window.scrollY > 41 || this.state.mobile) this.setState({ fixed: true })
    else this.setState({ fixed: false })
  }

  clearSubmenuSection = () => this.setState({ visibleSubmenu: '' })

  setSubmenuSection = visibleSubmenu => this.setState(prevState => {
    if (prevState.visibleSubmenu === visibleSubmenu) {
      return { visibleSubmenu: '' };
    } else {
      return { visibleSubmenu };
    }
  });

  setCurrentSection = (section) => {
    this.setState({ currentSection: section });
  }

  toggleMobileMenu = () => {
    this.setState(prevState => prevState.mobileVisible ? { mobileVisible: false } : { mobileVisible: true });
  }

  hideMenu = () => {
    this.setState({ visibleSubmenu: '' })
    this.setState({ mobileVisible: false });
  }

  stopEventToStillShowSubsection = e => {
    e.stopPropagation();
  }

  render() {
    const { mobile, submenuSection } = this.state
    // MOBILE MENU
    if (mobile) {
      return (
        <StyledNavBar
          fixed={true}
          onClick={this.stopEventToStillShowSubsection}
          mobile={mobile}
        >
          <img className="mobile-menu" src={mobileIcon} alt="Mobile menu" onClick={this.toggleMobileMenu} />
          <StyledLogoLink to="/">
            <img className="logo" src={logo} alt="Wella Logo" />
          </StyledLogoLink>
          <MobileMenu visible={this.state.mobileVisible} />
        </StyledNavBar>
      )
    }
    else {
      // DESKTOP MENU
      return (
        <div style={{ width: '100%' }}>
          <Sticky innerZ={10}>
            {status => (
              <StyledNavBar
                onClick={this.stopEventToStillShowSubsection}
                fixed={true}
              >
                <StyledLogoLink
                  to="/"
                  fixed={true}
                >
                  <img className="logo" src={logo} alt="Wella Logo" />
                </StyledLogoLink>
                <StyledMenu
                  fixed={true}
                  selected={this.state.visibleSubmenu}
                >
                  <li className="products">
                    <button
                      className={`products-button ${submenuSection === 'products' ? 'active' : ''}`}
                      onClick={() => this.setSubmenuSection('products')}
                    >
                      Produkty
                    </button>
                  </li>
                  <li className="trends" >
                    <Link to="/trendy"
                      activeStyle={{ fontWeight: "700", }}
                    >
                      Trendy
                    </Link>
                  </li>
                  <li className="inside" >
                    <Link to="/historia"
                      activeStyle={{ fontWeight: "700", }}
                    >
                      Historia
                    </Link>
                  </li>
                  <li className="professionals">
                    <button
                      className={`products-button ${submenuSection === 'professionals' ? 'active' : ''}`}
                      onClick={() => this.setSubmenuSection('professionals')}
                    >
                      Dla profesjonalistów
                    </button>
                  </li>
                  <li className="news" >
                    <Link to="/aktualnosci"
                      activeStyle={{ fontWeight: "700", }}
                    >
                      Aktualności
                    </Link>
                  </li>
                  <li className="shop">
                    <a href="https://sklepwella.orbico.pl/">Sklep Wella</a>
                  </li>
                </StyledMenu>
                <ProductsSubmenu
                  visible={this.state.visibleSubmenu === 'products'}
                  fixed={true} />
                <ProfessionalsSubmenu
                  visible={this.state.visibleSubmenu === 'professionals'}
                  fixed={true} />
              </StyledNavBar>
            )}
          </Sticky>
        </div>
      )
    }
  }
}
