import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'
import SweetScroll from 'sweet-scroll'

const scroller = new SweetScroll({
  duration: 750
})

const StyledTimeline = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
    background-color: #fff;
    width: calc(100vw - 17px);
    padding: 24px 32px;
    position: sticky;
    top: 114px;
    /* 114 px is a height of navigation */
    z-index: 3;

    :focus {
      outline: none;
    }
  }
`

const StyledDiv = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: flex-end;
    margin: auto;
    width: 931px;
    font-size: 1em;
  }

  @media screen and (min-width: 1400px) {
    width: 1300px;
    font-size: 1.5em;
  }
`

const active = css`
  color: #111;
  border-bottom: 8px #111 solid;
  font-size: 120%;
  line-height: 120%;
  font-weight: 600;
`

const StyledYear = styled.div`
  display: inline-block;
  width: ${props => `${props.width}%`};
  text-align: center;
  color: #aaa;
  border-bottom: 8px #aaa solid;
  ${props => props.active && active};

  :hover {
    cursor: pointer;
  }
`


class Timeline extends React.Component {
  state = {
    activeYear: '1850-80',
    tileSize: 428
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setTimelinePosition)
    window.addEventListener('onresize', this.setSizeOfTile)
    this.setSizeofTile()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setTimelinePosition)
    window.addEventListener('resize', this.setSizeOfTile)
  }

  setSizeofTile = e => {
    this.setState({
      tileSize: window.innerWidth < 1400 ? 305 : 428
    })
  }

  setTimelinePosition = e => {
    const changeActiveYear = (row, year) => {
      const position = (row - 1) * (this.state.tileSize + 8) + 138 - this.state.tileSize / 2
      if (window.scrollY >= position) this.setState({ activeYear: year })
    }

    if (window.scrollY < 138 - 1) {
      this.setState({
        activeYear: '1850-80'
      })
    } else {
      this.props.data.forEach(element => {
        changeActiveYear(element.row, element.year)
      })
    }
  }

  switchYear = row => {
    scroller.to(138 + (row - 1) * (this.state.tileSize + 8))
  }

  render() {

    const styledYearWidth = 100 / this.props.data.length;

    const Years = this.props.data.map(element => {
      if (this.state.activeYear === element.year) {
        return (
          <StyledYear width={styledYearWidth} key={element.year} active>
            {element.year}
          </StyledYear>
        )
      } else {
        return (
          <StyledYear width={styledYearWidth} key={element.year} onClick={() => this.switchYear(element.row)}>
            {element.year}
          </StyledYear>
        )
      }

    })

    return (
      <Fragment>
        <StyledTimeline>
          <StyledDiv>
            {Years}
          </StyledDiv>
        </StyledTimeline>
      </Fragment>
    )
  }
}

export default Timeline;