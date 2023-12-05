import React from "react";

import { graphql } from "gatsby";

import Button from "../../atoms/Button/Button";

import {
  StyledRealizationTemplate,
  StyledTextWrapper,
  StyledImageWrapper,
  StyledContentWrapper,
} from "./RealizationTemplate.styles";

import { StyledSecondTitle } from "../../../styles/sharedStyles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const RealizationTemplate = ({ data: { datoCmsRealizacja } }) => (
  <StyledRealizationTemplate>
    <StyledTextWrapper>
      <StyledSecondTitle>{datoCmsRealizacja.tytu}</StyledSecondTitle>
      <StyledContentWrapper>{datoCmsRealizacja.opisDoStronyRealizacji}</StyledContentWrapper>
      <Button text="KONTAKT" href="/kontakt" />
    </StyledTextWrapper>
    <StyledImageWrapper>
      <GatsbyImage
        image={getImage(datoCmsRealizacja.duEZdjCieNaStronRealizacji.gatsbyImageData)}
        alt={datoCmsRealizacja.duEZdjCieNaStronRealizacji.alt}
      />
    </StyledImageWrapper>
  </StyledRealizationTemplate>
);

export default RealizationTemplate;

export const query = graphql`
  query RealizationPageQuery($realizationId: String) {
    datoCmsRealizacja(id: { eq: $realizationId }) {
      id
      slug
      tytu
      opisDoStronyRealizacji
      duEZdjCieNaStronRealizacji {
        alt
        gatsbyImageData
      }
    }
  }
`;
