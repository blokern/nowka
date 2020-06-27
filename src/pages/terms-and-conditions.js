import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import { WordpressPage } from '../components/WordpressPage'

const TermsPage = ({ data }) => {
  const { title, content } = data.wordpressPage;
  return (
    <Layout pageTitle='Terms And Conditions'>
      <WordpressPage title={title} content={content} />
    </Layout>
  )
}

export default TermsPage

export const query = graphql`
  query { 
    wordpressPage(slug: {eq: "terms-and-conditions"}) {
      title
      content
    }
  }
`
