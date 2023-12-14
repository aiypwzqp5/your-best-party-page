import React from "react";
import { StyledLink } from "./Link.styles";

const Link = ({ url, ariaLabel, className, children, onClick }) => (
  <StyledLink
    onClick={onClick}
    to={url}
    aria-label={ariaLabel}
    className={className}
    activeClassName="active"
  >
    {children}
  </StyledLink>
);

export default Link;
