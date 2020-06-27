import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import { WordpressPage } from '../components/WordpressPage'

const CookiesPage = ({ data }) => {
  const { title, content } = data.wordpressPage;
  return (
    <Layout pageTitle='About Cookies'>
      <WordpressPage title={title} content={content} />
    </Layout>
  )
}

export default CookiesPage

export const query = graphql`
  query { 
    wordpressPage(slug: {eq: "about-cookies"}) {
      title
      content
    }
  }
`