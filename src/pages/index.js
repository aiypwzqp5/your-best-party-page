import * as React from "react"
import { graphql } from "gatsby"

import { SEO } from "../components/atoms/seo/seo"
import YourBestPartySection from "../components/molecules/YourBestPartySection/YourBestPartySection"
import ListSection from "../components/molecules/ListSection/ListSection"
import HeroSection from "../components/organisms/HeroSection/HeroSection"
import OurRealizationsSection from "../components/organisms/OurRealizationsSection/OurRealizationsSection"
import FAQContactSection from "../components/organisms/Contact/Contact"

const IndexPage = ({ data: { datoCmsStronaGWna }}) => {
  return (
    <main>
      <HeroSection 
        title={datoCmsStronaGWna.tytuStrony}
        desc={datoCmsStronaGWna.opisStronyWSekcjiGOwnej}
        heroImage={datoCmsStronaGWna.zdjCieGWne}
      />
      <YourBestPartySection
        image={datoCmsStronaGWna.zdjCieDoDrugiejSekcji}
        title={datoCmsStronaGWna.tytuDrugiejSekcji}
        desc={datoCmsStronaGWna.opisDrugiejSekcji}
      />
      <ListSection
        image={datoCmsStronaGWna.zdjCieDoTrzeciejSekcji}
        title={datoCmsStronaGWna.tytuTrzeciejSekcji}
        list={datoCmsStronaGWna.lista}
      />
      <OurRealizationsSection />
      <FAQContactSection />
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
      opisDrugiejSekcji
      tytuDrugiejSekcji
      tytuTrzeciejSekcji
      zdjCieDoDrugiejSekcji {
        alt
        title
        gatsbyImageData
      }
      zdjCieDoTrzeciejSekcji{
        alt
        title
        gatsbyImageData
      }
      lista {
        id
        element
      }
    }
  }
`