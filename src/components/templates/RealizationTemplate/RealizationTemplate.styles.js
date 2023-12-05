import styled from "styled-components";

export const StyledRealizationTemplate = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;

export const StyledTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 44px;
  padding: clamp(22px, 4.444vw, 64px);

  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const StyledImageWrapper = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    width: 50%;
    height: 100%;
    display: block;

    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
    }
  }
`;

export const StyledContentWrapper = styled.div`
  max-width: 550px;
  font-size: 20px;
  line-height: 1.4em;
`;
