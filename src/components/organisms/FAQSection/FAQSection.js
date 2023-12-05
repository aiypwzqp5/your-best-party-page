import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import FAQElement from "../../atoms/FAQElement/FAQElement"

import { StyledFAQSection, StyledElements } from "./FAQSection.styles"
import { StyledSecondTitle } from "../../../styles/sharedStyles"

const FAQSection = () => {
    const { datoCmsSekcjaFaq } = useStaticQuery(graphql`
        query faqQuery {
            datoCmsSekcjaFaq {
                tytu
                pytaniaIOdpowiedzi {
                    id
                    odpowied
                    pytanie
                }
            }
        }
    `)


    return (
        <StyledFAQSection>
            <StyledSecondTitle>
                {datoCmsSekcjaFaq.tytu}
            </StyledSecondTitle>
            <StyledElements>
                {datoCmsSekcjaFaq.pytaniaIOdpowiedzi.map(({ id, pytanie, odpowied }) => (
                    <FAQElement key={id} question={pytanie} answer={odpowied} />
                ))}
            </StyledElements>
        </StyledFAQSection>
    )
}

export default FAQSection