import styled from "styled-components"

export const StyledRealizationCard = styled.div`
    width: 98%;
    height: 266px;
    position: relative;
    display: flex;
    align-items: flex-end;
`

export const StyledImageWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
    }
`

export const StyledTitleWrapper = styled.div`
    width: 100%;
    height: 85px;
    background-color: rgba(0,0,0,0.57);
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
`

export const StyledTitle = styled.p`
    font-weight: bold;
    font-size: 20px;
    color: var(--white);
    padding-left: 21px;
`