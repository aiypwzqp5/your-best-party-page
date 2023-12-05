import styled from "styled-components"

export const StyledFAQSection = styled.div`
    width: 100%;
    background-color: var(--orange);

    @media only screen and (min-width: 954px){
        width: 55%;
    }

    @media only screen and (min-width: 1440px){
        width: 65%;
    }
`

export const StyledElements = styled.div`
    margin-top: clamp(30px, 5.694vw, 82px);
    display: flex;
    flex-direction: column;
    gap: clamp(20px, 3.056vw, 44px);
`