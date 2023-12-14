import React from "react";
import { StyledNav } from "./Nav.styles";
import Link from "../../atoms/Link/Link";
import { NavLabels } from "./Nav.data";

const Nav = ({ isOpen, isBlack, setIsOpen }) => {
  const isBlackClassName = isBlack ? "color--always-black" : isOpen ? "color--black" : null;

  return (
    <StyledNav $isOpen={isOpen}>
      <Link url="/kontakt" className={isBlackClassName} onClick={() => setIsOpen(false)}>
        {NavLabels.CONTACT}
      </Link>
      <Link url="/nasze-realizacje" className={isBlackClassName} onClick={() => setIsOpen(false)}>
        {NavLabels.REALIZATIONS}
      </Link>
    </StyledNav>
  );
};

export default Nav;
