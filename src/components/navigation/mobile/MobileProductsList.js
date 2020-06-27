import React, { Fragment } from 'react';
import MobileTile from './MobileTile';
import { StaticQuery, graphql } from 'gatsby'

const productsWithCategoryQuery = graphql`
  {
    allWordpressPost(
      filter: { categories: { elemMatch: { name: { eq: "Produkt" } } } }
    ) {
      edges {
        node {
          slug
          title
          acf {
            subtitle
          }
          categories {
            name
          }
        }
      }
    }
  }
`

const MobileProductsList = ({ categoryName }) => (
  <Fragment>
    <StaticQuery query={productsWithCategoryQuery}>
      {({ allWordpressPost: { edges } }) => {
        const currentCategoryPosts = edges.filter(({ node: post }) =>
          post.categories.find(category => category.name === categoryName)
        )
        return (currentCategoryPosts.map(
          ({ node: post }) => (
            <MobileTile
              key={post.title}
              title={post.title}
              link={`/${post.slug}`}
              subtitle={post.acf.subtitle}
              product
            />
          )
        ))
      }}
    </StaticQuery>
  </Fragment>
);

export default MobileProductsList;