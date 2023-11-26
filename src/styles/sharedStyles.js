import styled, { css } from "styled-components"

export const focusVisibleStyles = css`
    &:focus-visible {
        outline-width: 1px;
        outline-style: solid;
        outline-color: var(--orange);
        outline-offset: 3px;
    }
`

export const StyledSecondTitle = styled.h2``