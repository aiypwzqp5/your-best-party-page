import React from 'react'

import GlobalStyles from "../../../styles/GlobalStyles"
import Header from '../../organisms/Header/Header'

import { StyledGlobalWrapper } from "../../../styles/sharedStyles"

const GlobalLayout = ({ children }) => (
    <>
        <GlobalStyles />
        <Header />
        <StyledGlobalWrapper>
            {children}
        </StyledGlobalWrapper>
    </>
)

export default GlobalLayout