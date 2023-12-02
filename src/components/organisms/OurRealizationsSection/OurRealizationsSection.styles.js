import styled from "styled-components";

export const StyledOurRealizationsSection = styled.div`
  width: 100%;
  padding: 31px 23px;

  @media only screen and (min-width: 768px) {
    padding: 92px 60px;
  }
`;

export const StyledSliderWrapper = styled.div`
  width: 100%;
  margin-top: 31px;

  a {
    text-decoration: none;
  }

  .slick-dots {
    transform: translateY(20px);

    li {
      margin-right: 18px;

      &:last-child {
        margin-right: 0;
      }

      &.slick-active {
        button {
          background-color: var(--dark-gray);
        }
      }

      button {
        width: 24px;
        height: 24px;
        background-color: var(--gray);
        border-radius: 50%;

        &::before {
          content: "";
        }
      }
    }
  }
`;