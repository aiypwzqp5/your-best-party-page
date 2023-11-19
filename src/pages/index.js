import * as React from "react"

import { SEO } from "../components/atoms/seo/seo"
import GlobalStyle from "../styles/GlobalStyles"
import Input from "../components/atoms/Input/Input"
import Button from "../components/atoms/Button/Button"

const IndexPage = () => {
  return (
    <main>
      <GlobalStyle />
      <h1>Strona główna</h1>
      <Input name="name" type="text" error="Error" label="Imię"/>
      <Input name="name" type="textarea" error="Error" label="Imię"/>
      <Button text="Przcysik" href="/kontakt" />
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <SEO title="Strona główna" description="Strona główna" pathname="/" />
)