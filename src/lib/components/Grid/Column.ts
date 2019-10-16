import styled from 'styled-components'

type ColumnRange = 1|2|3|4|5|6|7|8|9|10|11|12

interface IColumnComponentProps {
    mobile?: ColumnRange
    tablet?: ColumnRange
    desktop?: ColumnRange
    offsetMobile?: ColumnRange
    offsetTablet?: ColumnRange
    offsetDesktop?: ColumnRange
}

const calculateColumnWidthAndOffset = (props: IColumnComponentProps, type: keyof IColumnComponentProps): any => {
    let widthValue: number = 12
    let offsetValue: number = 0
    if (type === 'mobile') {
        widthValue = props.mobile ? props.mobile : 12
        offsetValue = props.offsetMobile ? props.offsetMobile : 0
    } else if (type === 'tablet') {
        widthValue = props.tablet ? props.tablet : (props.mobile ? props.mobile : 12)
        offsetValue = props.offsetTablet ? props.offsetTablet : (props.offsetMobile ? props.offsetMobile : 0)
    } else if (type === 'desktop') {
        widthValue = props.desktop ? props.desktop : (props.tablet ? props.tablet : (props.mobile ? props.mobile : 12))
        offsetValue = props.offsetDesktop
            ? props.offsetDesktop
            : (props.offsetTablet
                ? props.offsetTablet
                : (props.offsetMobile
                    ? props.offsetMobile
                    : 0))
    }

    const width = widthValue / 12 * 100
    const offset = offsetValue / 12 * 100

    return `
        width: ${width}%;
        margin-left: ${offset}%;
    `
}

export const Column = styled.div<IColumnComponentProps>`
    float: left;
    padding: .25rem;
    min-height: 1px;
    box-sizing: border-box;

    @media only screen and (max-width: 767px) {
        ${(props: IColumnComponentProps) => calculateColumnWidthAndOffset(props, 'mobile')};
    }
    @media only screen and (min-width: 768px) {
        ${(props: IColumnComponentProps) => calculateColumnWidthAndOffset(props, 'tablet')};
    }
    @media only screen and (min-width: 992px) {
        ${(props: IColumnComponentProps) => calculateColumnWidthAndOffset(props, 'desktop')};
    }
`
