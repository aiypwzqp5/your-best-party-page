import React from 'react'

import Contact from '../Contact/Contact'
import FAQSection from '../FAQSection/FAQSection'
import DoubleCircle from '../../atoms/Icons/DoubleCircle'

import { StyledFAQContactSection, StyledCircleWrapper } from "./FAQContactSection.styles"

const FAQContactSection = ({ isContactPage }) => (
  <StyledFAQContactSection $isContactPage={isContactPage}>
    <StyledCircleWrapper>
      <DoubleCircle />
    </StyledCircleWrapper>
    <Contact isContactPage={isContactPage} />
    <FAQSection isContactPage={isContactPage} />
  </StyledFAQContactSection>
)

export default FAQContactSection