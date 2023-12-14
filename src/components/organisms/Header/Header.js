import React, { useState } from "react";
import { useLocation } from "@reach/router";

import Nav from "../Nav/Nav";
import HamburgerButton from "../../atoms/HamburgerButton/HamburgerButton";

import { StyledHeader, StyledLogo } from "./Header.styles";
import Logo from "../../atoms/Icons/Logo";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isOurRealizationPage = location.pathname === "/nasze-realizacje/";

  return (
    <StyledHeader>
      <StyledLogo to="/">
        <Logo
          isBlack={
            isOurRealizationPage ||
            location.pathname === "/kontakt/" ||
            location.pathname.includes("/realizacja/")
          }
        />
      </StyledLogo>
      <Nav isBlack={isOurRealizationPage} isOpen={isOpen} setIsOpen={setIsOpen} />
      <HamburgerButton
        isBlack={
          isOurRealizationPage ||
          location.pathname === "/kontakt/" ||
          location.pathname.includes("/realizacja/")
        }
        isOpen={isOpen}
        openMenu={() => setIsOpen((prev) => !prev)}
      />
    </StyledHeader>
  );
};

export default Header;
