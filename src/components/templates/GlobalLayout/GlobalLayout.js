import React from 'react'

import GlobalStyles from "../../../styles/GlobalStyles"
import Header from '../../organisms/Header/Header'
import Footer from '../../molecules/Footer/Footer'

import { StyledGlobalWrapper } from "../../../styles/sharedStyles"

const GlobalLayout = ({ children }) => (
    <>
        <GlobalStyles />
        <Header />
        <StyledGlobalWrapper>
            {children}
            <Footer />
        </StyledGlobalWrapper>
    </>
)

export default GlobalLayout