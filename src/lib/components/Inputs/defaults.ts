import styled from 'styled-components'
import { Colors } from '../Styles'

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  padding-top: 20px;
`

export const defaultInputStyles = `
    display: block;
    width: 100%;
    padding: .5rem .75rem;
    font-size: 1rem;
    line-height: 1.25;
    color: #495057;
    background-color: ${Colors.input.background.default};
    background-clip: padding-box;
    border: none;
    border-bottom: 1px solid ${Colors.input.border.default};
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    &:focus, &:hover, &:active {
      border-bottom: 3px solid ${Colors.input.border.hover};
    }
    &:focus + label, &.filled + label {
      font-size: 75%;
      transform: translate3d(0, -100%, 0);
      padding-top: 13px;
      padding-left: 10px;
      opacity: 1;
    }
`

export const DefaultLabel = styled.label`
  position: absolute;
  top: 20px;
  padding-top: 7px;
  transition: all 200ms;
  opacity: 0.5;
  display: inline-block;
  margin-bottom: .5rem;
  cursor: text;
`

export const getUniqueID = (): string => {
  return '_' + Math.random().toString(36).substr(2, 9)
}