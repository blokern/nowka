import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'

const TitleDateWrapper = styled.div`
  margin-bottom: 4rem;
`

const StyledPostContainer = styled.div`
  iframe {
    max-width: 100%;
  }
`

export const BlogPostTemplate = ({ content, title, date, helmet }) => (
  <section className="section">
    {helmet || ''}
    <div className="container content">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <TitleDateWrapper>
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <span>{date}</span>
          </TitleDateWrapper>
          <StyledPostContainer dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  </section>
)

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const BlogPost = ({ data }) => {
  const { wordpressPost: post } = data

  let isProduct = false;
  for (let category of post.categories) {
    if (category.name === 'Produkt') {
      isProduct = true;
    }
  }

  return (
    <Layout>
      <BlogPostTemplate
        content={post.content}
        helmet={
          <Helmet title={`${post.title} | ${isProduct ? 'Produkt' : 'Post'}`} />
        }
        categories={post.categories}
        tags={post.tags}
        title={post.title}
        date={isProduct ? '' : post.date}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  fragment PostFields on wordpress__POST {
    id
    slug
    content
    date(formatString: "DD.MM.YYYY")
    title
  }
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      date(formatString: "D.MM.YYYY")
      categories {
        name
      }
    }
  }
`
