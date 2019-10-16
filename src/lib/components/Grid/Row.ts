import styled from 'styled-components'

export const Row = styled.div`
    margin-right: -15px;
    margin-left: -15px;
    &::before, &::after {
        display: table;
        content: ' ';
    }
    &::after {
        content: '';
        clear: both;
    }
`
