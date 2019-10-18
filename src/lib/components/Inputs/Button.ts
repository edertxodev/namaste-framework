import styled from 'styled-components'
import { Colors } from '../Styles'

type ButtonTypes = 'default'|'primary'|'secondary'|'disabled'

const defaultButton = `
  background-color: ${Colors.default.default};
  color: ${Colors.textDark};
  &:hover {
    background-color: ${Colors.default.dark};
  }
`
const primaryButton = `
  background-color: ${Colors.primary.default};
  color: ${Colors.textDark};
  &:hover {
    background-color: ${Colors.primary.dark};
  }
`

const secondaryButton = `
  background-color: ${Colors.secondary.default};
  color: ${Colors.textLight};
  &:hover {
    background-color: ${Colors.secondary.dark};
  }
`

const disabledButton = `
    background-color: ${Colors.default.default};
    color: ${Colors.default.light};
    cursor: not-allowed;
`

interface IButtonProps {
    view?: ButtonTypes
    rounded?: boolean
    shadow?: boolean
    block?: boolean
}

const getButtonStyle = (type: ButtonTypes): string => {
    switch (type) {
        case 'default':
            return defaultButton
        case 'primary':
            return primaryButton
        case 'secondary':
            return secondaryButton
        case 'disabled':
            return disabledButton
    }
}

export const Button = styled.button<IButtonProps>`
    padding: 20px 45px;
    font-size: 1rem;
    font-weight: 500;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    line-height: 1.75;
    min-width: 64px;
    border: 0;
    cursor: pointer;
    margin: .25rem auto;
    ${(props: IButtonProps) => props.block ? 'width: 100%; display: block;' : ''}
    ${(props: IButtonProps) => props.view ? getButtonStyle(props.view) : defaultButton}
    ${(props: IButtonProps) => props.rounded ? 'border-radius: 4px;' : ''}
    ${(props: IButtonProps) => props.shadow
        ? 'box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12);'
        : ''}
    &:hover {
        ${(props: IButtonProps) => props.shadow
            ? 'box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);'
            : ''}
    }
`

export const AnimatedButton = styled.button`
  line-height: 50px;
  height: 50px;
  text-align: center;
  width: 250px;
  cursor: pointer;
  color: #fff;
  transition: all .5s;
  position: relative;
  background-color: transparent;
  border: 0;
  &:hover::before {
    opacity: 0 ;
    transform: scale(.5, .5);
  }
  &:hover::after {
    opacity: 1;
    transform: scale(1, 1);
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(255, 255, 255, .1);
    transition: all .3s;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all .3s;
    border: 1px solid ${Colors.secondary.default};
    transform: scale(1.2, 1.2);
  }
`
