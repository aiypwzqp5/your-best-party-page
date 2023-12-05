import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  height: 100vh;
  background-color: var(--white);
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 44px;
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};

  @media only screen and (min-width: 768px) {
    height: auto;
    width: auto;
    position: relative;
    top: unset;
    left: unset;
    background-color: transparent;
    display: flex;
    flex-direction: row;
  }
`;