import * as React from "react"
import { graphql } from "gatsby"

import { SEO } from "../components/atoms/seo/seo"
import Input from "../components/atoms/Input/Input"
import Button from "../components/atoms/Button/Button"
import Link from "../components/atoms/Link/Link"
import HamburgerButton from "../components/atoms/HamburgerButton/HamburgerButton"

const IndexPage = ({ data }) => {
  return (
    <main>
      <h1>{data.datoCmsStronaGWna.tytuStrony}</h1>
      <Input name="name" type="text" error="Error" label="Imię"/>
      <Input name="name" type="textarea" error="Error" label="Imię"/>
      <Button text="Przcysik" href="/kontakt" />
      <HamburgerButton isOpen isBlack/>
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
      }
    }
  }
`