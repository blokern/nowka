import React, { Component } from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  position: absolute;
  top: ${props => (props.fixed ? '114px' : '144px')};
  width: 946px;
  height: 312px;
  @media screen and (min-width: 1400px) {
    width: 1324px;
    height: 422px;
  }
`

class Submenu extends Component {
  submenu = React.createRef()

  componentDidMount() {
    window.addEventListener('mousedown', this.handleOutsideClick, false)

    // window.addEventListener('mouseup', this.handleOutsideClick)
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.handleOutsideClick, false)
    // window.removeEventListener('mouseup', this.handleOutsideClick)
  }

  handleOutsideClick = event => {
    if (!this.submenu.current.contains(event.target)) {
      this.props.handleOutsideClick()
    }
    console.log('k')
  }

  render() {
    const { isFixed, children } = this.props
    return (
      <StyledDiv ref={this.submenu} fixed={isFixed}>
        {children}
      </StyledDiv>
    )
  }
}

export default Submenu
