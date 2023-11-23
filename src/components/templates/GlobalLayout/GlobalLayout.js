import React from 'react'

import GlobalStyles from "../../../styles/GlobalStyles"

const GlobalLayout = ({ children }) => (
    <>
        <GlobalStyles />
        {children}
    </>
)

export default GlobalLayout