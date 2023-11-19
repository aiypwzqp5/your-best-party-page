import styled from "styled-components"
import { Link } from "gatsby"
import { focusVisibleStyles } from "../../../styles/sharedStyles"

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: var(--white);
    font-size: 20px;
    transition: color 250ms linear;
    cursor: pointer;

    &:hover {
        color: var(--red);
    }

    ${focusVisibleStyles};
`