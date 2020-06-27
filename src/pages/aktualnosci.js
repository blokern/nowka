import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PostSlider from '../components/PostSlider'
import News from '../components/News'
import HomePageTile from '../components/HomepageTile'

const StyledSection = styled.section`
  max-width: 90%;
  margin: 0 auto;

  @media screen and (min-width: 1360px) {
    max-width: 1300px;
  }
`

const StyledTilesWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allWordpressPost
    const notProductPosts = posts.filter(({ node: post }) => !!post.featured_media)
    const numberOfPostInSlider = 5
    const numberOfPostAsNews = 2
    const postsInSlider = notProductPosts.slice(0, numberOfPostInSlider)
    const postsToShowAsNews = notProductPosts.slice(numberOfPostInSlider, numberOfPostInSlider+numberOfPostAsNews)
    const postsAsTiles = notProductPosts.slice(numberOfPostInSlider+numberOfPostAsNews)

    return (
      <Layout pageTitle='Aktualności'>
        <PostSlider posts={postsInSlider} />
        <StyledSection>
          <News posts={postsToShowAsNews} />
          <StyledTilesWrapper>
            {postsAsTiles
              .map(({ node: post }) => (
                <HomePageTile post={post} />
              ))}
          </StyledTilesWrapper>
        </StyledSection>
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
  query AktualnosciQuery {
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
          date(formatString: "D.MM.YYYY")
          slug
        }
      }
    }
  }
`
