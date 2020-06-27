import React, { Component } from 'react'

class PreservedProductsState extends Component {
  state = {
    chosenProductCategory: '',
  }

  changeProductCategory = newValue =>
    this.setState(({ chosenProductCategory }) => ({
      chosenProductCategory: newValue === chosenProductCategory ? '' : newValue,
    }))

  render() {
    return this.props.children({
      chosenProductCategory: this.state.chosenProductCategory,
      changeProductCategory: this.changeProductCategory,
    })
  }
}

export default PreservedProductsState
