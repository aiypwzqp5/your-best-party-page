import styled from "styled-components";

export const StyledFAQSection = styled.section`
  width: 100%;
  background-color: var(--orange);
  padding: ${({ $isContactPage }) =>
      $isContactPage ? "40px" : "clamp(34px, 4.444vw, 64px)"}
    clamp(22px, 4.722vw, 68px) clamp(34px, 4.444vw, 64px);

  @media only screen and (min-width: 954px) {
    width: 50%;
    padding-top: ${({ $isContactPage }) =>
      $isContactPage ? "148px" : "clamp(34px, 4.444vw, 64px)"};
  }

  @media only screen and (min-width: 1440px) {
    width: 65%;
  }
`;

export const StyledElements = styled.div`
  margin-top: clamp(30px, 5.694vw, 82px);
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3.056vw, 44px);
`;