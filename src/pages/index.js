import * as React from "react"
import { graphql } from "gatsby"

import { SEO } from "../components/atoms/seo/seo"
import Input from "../components/atoms/Input/Input"
import Button from "../components/atoms/Button/Button"
import Link from "../components/atoms/Link/Link"
import HamburgerButton from "../components/atoms/HamburgerButton/HamburgerButton"
import HeroSection from "../components/organisms/HeroSection/HeroSection"

const IndexPage = ({ data: { datoCmsStronaGWna }}) => {
  return (
    <main>
      <HeroSection 
        title={datoCmsStronaGWna.tytuStrony}
        desc={datoCmsStronaGWna.opisStronyWSekcjiGOwnej}
        heroImage={datoCmsStronaGWna.zdjCieGWne}
      />
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <SEO title="Strona główna" description="Strona główna" pathname="/" />
)

export const query = graphql`
  query homePageQuery {
    datoCmsStronaGWna {
      tytuStrony
      opisStronyWSekcjiGOwnej
      zdjCieGWne {
        alt
        title
        gatsbyImageData
      }
    }
  }
`