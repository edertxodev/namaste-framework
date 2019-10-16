import styled from 'styled-components'

interface ICardProps {
    background?: string
    color?: string
    shadow?: boolean
    bordered?: boolean
}

export const Card = styled.div<ICardProps>`
    width: 100%;
    overflow: hidden;
    ${(props: ICardProps) => props.bordered ? 'border-radius: 4px;' : ''};
    padding: 5px;
    background-color: ${(props: ICardProps) => props.background ? props.background : '#fff'};
    color: ${(props: ICardProps) => props.color ? props.color : '#333'};
    ${(props: ICardProps) => props.shadow
        ? 'box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)'
        : ''};
`

export const CardHeader = styled.div`
    padding: 16px;
`

export const CardTitle = styled.span`
    font-size: 0.875rem;
    letter-spacing: 0.01071rem;
    line-height: 1.43;
    display: block;
`

export const CardSubtitle = styled.span`
    font-size: 0.875rem;
    letter-spacing: 0.01071rem;
    line-height: 1.43;
    opacity: .54;
    display: block;
`

interface ICardImageProps {
    src?: string
}

export const CardImage = styled.div<ICardImageProps>`
    background-image: url(${(props: ICardImageProps) => props.src ? props.src : ''});
    height: 0;
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding-top: 56.25%;
    margin-left: -5px;
    margin-right: -5px;
`

export const CardContent = styled.div`
    padding: 16px;
    font-size: .85rem;
`

export const CardActions = styled.div`
    padding: 8px;
`
