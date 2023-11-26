import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { 
    StyledYourBestPartySection,
    StyledTextWrapper,
    StyledImageWrapper,
    StyledDesc
} from "./YourBestPartySection.styles"
import Button from '../../atoms/Button/Button'
import { StyledSecondTitle } from '../../../styles/sharedStyles'

const YourBestPartySection = ({ image, title, desc }) => 
    <StyledYourBestPartySection>
        <StyledTextWrapper>
            <StyledSecondTitle $mobileTextAlign="center">{title}</StyledSecondTitle>
            <StyledDesc>
                {desc}
            </StyledDesc>
            <Button type="button" text="KONTAKT" href="/kontakt" />
        </StyledTextWrapper>
        <StyledImageWrapper>
            <GatsbyImage alt={image.alt} image={getImage(image.gatsbyImageData)} />
        </StyledImageWrapper>
    </StyledYourBestPartySection>

export default YourBestPartySection