import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Link from "../../atoms/Link/Link";
import { StyledFooter, StyledLinks, StyledBottomWrapper, StyledHeading } from "./Footer.styles";
import { labels } from "./Footer.data";

const Footer = () => {
  const { datoCmsStopka } = useStaticQuery(graphql`
    query footerQuery {
      datoCmsStopka {
        info
      }
    }
  `);

  return (
    <StyledFooter>
      <StyledHeading>{labels.logo}</StyledHeading>
      <StyledLinks>
        <Link url="/kontakt">{labels.kontakt}</Link>
        <Link url="/nasze-realizacje">{labels.realizacje}</Link>
      </StyledLinks>
      <StyledBottomWrapper>
        <p>
          {datoCmsStopka.info}
          {new Date().getFullYear()}
        </p>
      </StyledBottomWrapper>
    </StyledFooter>
  );
};

export default Footer;
