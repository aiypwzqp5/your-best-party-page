import React from 'react'

import GlobalStyles from "../../../styles/GlobalStyles"
import Nav from '../../organisms/Nav/Nav'

const GlobalLayout = ({ children }) => (
    <>
        <GlobalStyles />
        <Nav />
        {children}
    </>
)

export default GlobalLayout