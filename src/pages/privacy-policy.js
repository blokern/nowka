import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import { WordpressPage } from '../components/WordpressPage'

const PrivacyPage = ({ data }) => {
  const { title, content } = data.wordpressPage;
  return (
    <Layout pageTitle='Privacy Policy'>
      <WordpressPage title={title} content={content} />
    </Layout>
  )
}

export default PrivacyPage

export const query = graphql`
  query { 
    wordpressPage(slug: {eq: "privacy-notice"}) {
      title
      content
    }
  }
`