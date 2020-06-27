import React from 'react'
import styled, { css } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import ProductNav from './ProductNav'

const containerStyles = props => css`
  width: 712px;
  height: 312px;
  position: absolute;
  left: calc(50% - 239px);
  top: ${props => (props.fixed ? '114px' : '144px')};
  @media screen and (min-width: 1400px) {
    width: 900px;
    height: 422px;
    left: calc(50% - 349px);
  }
  display: grid;
  background: white;
  color: #fff;
`

const ProductsGrid = styled.div`
  ${p => containerStyles(p)};
  ${p =>
    !p.scrollableGrid
      ? css`
          grid-template-columns: repeat(${p.mediumGrid ? 4 : 3}, 1fr);
        `
      : css`
          grid-auto-columns: 25%;
          grid-template-rows: 50% 50%;
          grid-auto-flow: column;
        `};
  overflow-x: auto;
`

const productsQuery = graphql`
  query productsQuery {
    allWordpressPost(
      filter: { categories: { elemMatch: { name: { eq: "Produkt" } } } }
    ) {
      edges {
        node {
          id
          slug
          status
          title
          acf {
            subtitle
            product_picture {
              source_url
            }
            isHorizontal
          }
          categories {
            id
            name
            parent_element {
              name
            }
          }
        }
      }
    }
  }
`

const ProductsSubsection = ({ fixed, categoryName }) => (
  <StaticQuery query={productsQuery}>
    {({ allWordpressPost: { edges } }) => {
      const currentCategoryPosts = edges.filter(({ node: post }) =>
        post.categories.find(category => category.name === categoryName)
      )
      const isSmallGrid = currentCategoryPosts.length <= 6
      const isScrollableGrid = currentCategoryPosts.length > 8
      return (
        <ProductsGrid
          fixed={fixed}
          mediumGrid={!isScrollableGrid && !isSmallGrid}
          scrollableGrid={isScrollableGrid}
        >
          {currentCategoryPosts.map(
            ({ node: post }) =>
              (
                <ProductNav
                  horizontal={post.acf.isHorizontal}
                  title={post.title}
                  subtitle={post.acf.subtitle}
                  link={`/${post.slug}`}
                  icon={post.acf.product_picture.source_url}
                />
              )
          )}
        </ProductsGrid>
      )
    }}
  </StaticQuery>
)

export default ProductsSubsection
