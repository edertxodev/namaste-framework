import styled from 'styled-components'

interface IContainerProps {
    full?: boolean
}

export const Container = styled.div<IContainerProps>`
    width: ${(props: IContainerProps) => props.full ? 100 : 80}%;
    margin-left: auto;
    margin-right: auto;
    ${(props: IContainerProps) => (
        props.full ? 'padding-left: 15px;padding-right: 15px;' : ''
    )}
`
