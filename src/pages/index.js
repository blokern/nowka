import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PostSlider from '../components/PostSlider'
import HomePageTile from '../components/HomepageTile'

const StyledTilesWrapper = styled.div`
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 1360px) {
    max-width: 1300px;
  }
`

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allWordpressPost
    const notProductPosts = posts.filter(({ node: post }) => !!post.featured_media)
    const numberOfPostInSlider = 5
    const postsInSlider = notProductPosts.slice(0, numberOfPostInSlider)
    const postsAsTiles = notProductPosts.slice(numberOfPostInSlider)

    return (
      <Layout>
        <PostSlider posts={postsInSlider} />
        <section className="section">
          <StyledTilesWrapper>
            {postsAsTiles
              .map(({ node: post }) => (
                <HomePageTile post={post} key={post.title} />
              ))}
          </StyledTilesWrapper>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allWordpressPost: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allWordpressPost(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          title
          excerpt
          categories {
            name
          }
          featured_media {
            source_url
          }
          author {
            name
            avatar_urls {
              wordpress_48
            }
          }
          date(formatString: "MMMM DD, YYYY")
          slug
        }
      }
    }
  }
`
