import React from 'react'

import GlobalStyles from "../../../styles/GlobalStyles"
import Header from '../../organisms/Header/Header'

const GlobalLayout = ({ children }) => (
    <>
        <GlobalStyles />
        <Header />
        {children}
    </>
)

export default GlobalLayout