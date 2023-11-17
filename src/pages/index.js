import * as React from "react"

import { SEO } from "../components/atoms/seo/seo"

const IndexPage = () => {
  return (
    <main>
      <h1>Strona główna</h1>
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <SEO title="Strona główna" description="Strona główna" pathname="/" />
)