import React from 'react'
import { StyledLink } from './Link.styles'

const Link = ({ url, ariaLabel, className, children }) => 
    <StyledLink to={url} ariaLabel={ariaLabel} className={className}>
        {children}
    </StyledLink>

export default Link