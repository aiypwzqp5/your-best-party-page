import styled from "styled-components";

export const StyledFAQContactSection = styled.section`
    width: 100%;
    display: flex;
    position: relative;
    z-index: 1;
    flex-direction: column-reverse;

    @media only screen and (min-width: 954px) {
        flex-direction: row;
    }
`

export const StyledCircleWrapper = styled.div`
    position: absolute;
    top: 28%;
    z-index: -1;
    display: none;

    @media only screen and (min-width: 954px) {
        display: block;
    }
`