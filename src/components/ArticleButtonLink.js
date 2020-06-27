import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import ButtonBase from './ButtonBase'

const StyledArticleButton = styled(ButtonBase)`
  background-color: #cd1041;
  border: none;
  cursor: pointer;
  outline: none;
  margin-top: 24px;
  width: 40px;
  height: 40px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ArrowIcon = styled.div`
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 8px solid white;
`

const ArticleButtonLink = ({ url }) => (
  <StyledArticleButton onClick={() => navigate(`${url}`)}>
    <ArrowIcon />
  </StyledArticleButton>
)

export default ArticleButtonLink
