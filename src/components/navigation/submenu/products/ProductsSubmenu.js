import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import ProductsSubsection from './ProductsSubsection'

const StyledLeftBar = styled.div`
  visibility: ${props => (props.visible ? 'initial' : 'hidden')};
  position: absolute;
  top: ${props => (props.fixed ? '114px' : '144px')};
  left: calc(50% - 473px);
  width: 234px;
  height: 312px;
  background: rgb(247, 247, 247);
  border: none;
  @media screen and (min-width: 1400px) {
    width: 235px;
    height: 422px;
    left: calc(50% - 584px);
  }
`

const StyledList = styled.ul`
  width: 100%;
  height: 100%;
  list-style-type: none;
  padding: 0;
  color: #000;
  user-select: none;
  border: none;
  box-shadow: none;
`

const StyledListItem = styled.li`
  width: 100%;
  height: 55px;
  line-height: 55px;
  text-transform: uppercase;
  cursor: pointer;
  display: grid;
  grid-template-columns: 10% 75% 15%;
  justify-items: left;
  border: none;
  box-shadow: none;
`

const productSubCategoriesQuery = graphql`
  {
    allWordpressCategory(
      filter: { parent_element: { name: { eq: "Produkt" } } }
    ) {
      edges {
        node {
          name
        }
      }
    }
  }
`

class ProductsSubmenu extends Component {
  state = {
    visibleSubsection: '',
  }

  renderIcon = categoryName => {
    return this.state.visibleSubsection === categoryName ? '-' : '+'
  }

  changeVisibleSubsection = categoryName => {
    this.setState({
      visibleSubsection:
        this.state.visibleSubsection !== categoryName ? categoryName : '',
    })
  }

  render() {
    const { visible: submenuVisible, fixed } = this.props
    const { visibleSubsection } = this.state
    return (
      <React.Fragment>
        <StyledLeftBar visible={submenuVisible} fixed={fixed}>
          <StyledList>
            <StaticQuery query={productSubCategoriesQuery}>
              {({ allWordpressCategory: { edges } }) => {
                return edges.map(({ node: { name: categoryName } }) => (
                  <StyledListItem
                    key={categoryName}
                    onClick={() => this.changeVisibleSubsection(categoryName)}
                    style={{
                      fontWeight:
                        visibleSubsection === categoryName ? '700' : '400',
                      backgroundColor: 
                        visibleSubsection === categoryName ? '#e5c2cb' : 'transparent'
                    }}
                    selected={visibleSubsection === categoryName}
                  >
                    <span />
                    {categoryName}
                    <span>{this.renderIcon(categoryName)}</span>
                  </StyledListItem>
                ))
              }}
            </StaticQuery>
          </StyledList>
        </StyledLeftBar>
        {submenuVisible && visibleSubsection ? (
          <ProductsSubsection categoryName={visibleSubsection} fixed={fixed} />
        ) : null}
      </React.Fragment>
    )
  }
}

export default ProductsSubmenu
