import React from 'react'

import Contact from '../Contact/Contact'
import FAQSection from '../FAQSection/FAQSection'
import DoubleCircle from '../../atoms/Icons/DoubleCircle'

import { StyledFAQContactSection, StyledCircleWrapper } from "./FAQContactSection.styles"

const FAQContactSection = () => (
  <StyledFAQContactSection>
    <StyledCircleWrapper>
      <DoubleCircle />
    </StyledCircleWrapper>
    <Contact />
    <FAQSection />
  </StyledFAQContactSection>
)

export default FAQContactSection