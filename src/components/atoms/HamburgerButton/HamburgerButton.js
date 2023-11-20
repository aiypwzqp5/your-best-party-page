import React from "react";

import { 
    StyledHamburgerButton, 
    StyledHamburgerBox, 
    StyledHamburgerInner 
} from "./HamburgerButton.styles";

const HamburgerButton = ({ openMenu, isOpen, isBlack }) => (
    <StyledHamburgerButton
        aria-label="Otwórz menu"
        onClick={openMenu}
        $isOpen={isOpen}
    >
        <StyledHamburgerBox>
            <StyledHamburgerInner $isOpen={isOpen} $isBlack={isBlack} />
        </StyledHamburgerBox>
    </StyledHamburgerButton>
)

export default HamburgerButton;