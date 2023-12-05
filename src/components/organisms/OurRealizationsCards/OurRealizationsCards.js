import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  StyledOurRealizationsCards,
  StyledWrapper,
  StyledImage,
  StyledContent,
  StyledTitle,
  StyledText,
  StyledFootnote,
  StyledCardLink,
} from "./OurRealizationsCards.styles";
import { StyledSecondTitle } from "../../../styles/sharedStyles";
import { labels } from "./OurRealizationsCards.data";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const OurRealizationsCards = () => {
  const { allDatoCmsRealizacja } = useStaticQuery(graphql`
    query realizationsPage {
      allDatoCmsRealizacja {
        edges {
          node {
            katering
            liczbaOsB
            id
            opisDoMiniaturki
            slug
            tytu
            miniaturka {
              alt
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  return (
    <StyledOurRealizationsCards>
      <StyledSecondTitle>{labels.title}</StyledSecondTitle>
      <StyledWrapper>
        {allDatoCmsRealizacja.edges.map(({ node }) => (
          <StyledCardLink key={node.slug} to={`/realizacja/${node.slug}`}>
            <StyledImage>
              <GatsbyImage
                image={getImage(node.miniaturka.gatsbyImageData)}
                alt={node.miniaturka.alt}
              />
            </StyledImage>
            <StyledContent>
              <StyledTitle>{node.tytu}</StyledTitle>
              <StyledText>{node.opisDoMiniaturki}</StyledText>
              <StyledFootnote>
                <p>
                  {labels.catering}:{" "}
                  <span style={{ color: "var(--green)" }}>
                    {node.katering ? labels.yes : labels.no}
                  </span>
                </p>
                <p>
                  {labels.count}: <span style={{ color: "var(--green)" }}>{node.liczbaOsB}</span>
                </p>
              </StyledFootnote>
            </StyledContent>
          </StyledCardLink>
        ))}
      </StyledWrapper>
    </StyledOurRealizationsCards>
  );
};

export default OurRealizationsCards;
