import styled, { css } from "styled-components"
import { Link } from "gatsby"

const basicStyles = css`
    background-color: var(--orange);
    color: var(--white);
    padding: 12px 0;
    font-size: 20px;
    font-weight: 500;
    border-radius: 39px;
    border: none;
    cursor: pointer;
    width: 100%;
    transition: background-color 250ms linear;

    &:hover {
        background-color: var(--dark-gray);
    }

    &:focus-visible {
        outline-width: 1px;
        outline-style: solid;
        outline-color: var(--orange);
        outline-offset: 3px;
    }

    @media only screen and (min-width: 768px){
        padding: 22px 62px;
        max-width: 216px;
    }
`

export const StyledButton = styled.button`
    ${basicStyles};
`

export const StyledLink = styled(Link)`
    ${basicStyles}
    text-decoration: none;
    text-align: center;
`