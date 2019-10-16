import styled from 'styled-components'
import { Colors } from '../Styles'

type ButtonTypes = 'default'|'primary'|'secondary'|'disabled'

const defaultButton = `
    background-color: ${Colors.default};
    color: ${Colors.textDark};
    &:hover {
        background-color: #d5d5d5;
    }
`
const primaryButton = `
    background-color: ${Colors.primary};
    color: ${Colors.textLight};
`

const secondaryButton = `
    background-color: #e0e0e0;
    color: #333;
`

const disabledButton = `
    background-color: #e0e0e0;
    color: #333;
`

interface IButtonProps {
    view?: ButtonTypes
    rounded?: boolean
    shadow?: boolean
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
    padding: 6px 16px;
    font-size: 1rem;
    font-weight: 500;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    line-height: 1.75;
    min-width: 64px;
    border: 0;
    cursor: pointer;
    margin: 8px;
    ${(props: IButtonProps) => props.view ? getButtonStyle(props.view) : defaultButton}
    ${(props: IButtonProps) => props.rounded ? 'border-radius: 4px;' : ''}
    ${(props: IButtonProps) => props.shadow
        ? 'box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12);'
        : ''}
    &:hover {
        content: ' ';
        ${(props: IButtonProps) => props.shadow
            ? 'box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);'
            : ''}
    }
`
