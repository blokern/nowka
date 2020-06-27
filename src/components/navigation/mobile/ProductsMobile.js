import React, { Component, Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby'

import MobileTile from './MobileTile';
import ReturnButton from './ReturnButton';
import MoblieProductsList from './MobileProductsList'

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

class ProductsMobile extends Component {
  state = {
    visibleSubsection: '',
  }

  changeVisibleSubsection = categoryName => {
    this.setState({
      visibleSubsection:
        this.state.visibleSubsection !== categoryName ? categoryName : '',
    })
  }

  handleReturnClick = e => {
    this.setState({ visibleSubsection: '' });
  };

  render() {
    if (this.state.visibleSubsection === '') {
      return (
        <Fragment>
          <ReturnButton title={"Produkty"} handleReturn={this.props.returnClick} />
          <StaticQuery query={productSubCategoriesQuery}>
            {({ allWordpressCategory: { edges } }) => {
              return edges.map(({ node: { name: categoryName } }) => (
                <MobileTile
                  key={categoryName}
                  title={categoryName}
                  withArrow
                  click={() => this.changeVisibleSubsection(categoryName)}
                />
              ))
            }}
          </StaticQuery>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <ReturnButton title={this.state.visibleSubsection} handleReturn={this.handleReturnClick} />
        <MoblieProductsList categoryName={this.state.visibleSubsection} />
      </Fragment>
    );

  }


}

export default ProductsMobile;