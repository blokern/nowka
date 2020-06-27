import React from 'react'
import Helmet from 'react-helmet'
import './all.sass'
import helmetIcon from '../img/favicon.png'
import Navigation from './navigation/Navigation'
import TopBar from './TopBar'
import Footer from './Footer'
import CookiesPopup from '../components/CookiesPopup'

const TemplateWrapper = ({ children, pageTitle }) => (
  <div>
    <Helmet
      title={pageTitle ? `Wella | ${pageTitle}` : 'Wella'}
    >
      <link rel="icon" type="image/png" href={helmetIcon} />
    </Helmet>
    <TopBar />
    <Navigation />
    <div>{children}</div>
    <Footer />
    <CookiesPopup />
  </div>
)

export default TemplateWrapper
