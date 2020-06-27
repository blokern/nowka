import React from 'react'
import { css } from 'styled-components'

// type TestType = Partial<HTMLButtonElement>

const ButtonBase = ({
  children,
  className,
  component,
  disabled,
  onClick,
  href,
  to,
  type,
  fullWidth,
  uppercase,
  color,
  sizeProp,
  raised,
  ...otherProps
}) => {
  const buttonBaseStyles = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    outline: none;
    border: 0;
    margin: 0;
    border-radius: 0;
    padding: 0;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    -moz-appearance: none;
    -webkit-appearance: none;
    text-decoration: none;
    color: inherit;
    &::-moz-focus-inner {
      border-style: none;
    }
    ${disabled &&
      css`
        pointer-events: none;
        cursor: default;
      `};
    ${uppercase &&
      css`
        text-transform: uppercase;
      `};
  `

  const buttonProps = otherProps
  let ComponentProp = component

  if (!ComponentProp) {
    ComponentProp = href ? 'a' : 'button'
  }

  if (ComponentProp === 'button') {
    buttonProps.type = type || 'button'
    buttonProps.disabled = disabled
  } else {
    buttonProps.role = 'button'
  }
  return (
    <ComponentProp
      href={href}
      onClick={onClick}
      css={buttonBaseStyles}
      className={className}
      to={to}
      {...buttonProps}
    >
      {children}
    </ComponentProp>
  )
}

ButtonBase.defaultProps = {
  disabled: false,
}

export default ButtonBase
