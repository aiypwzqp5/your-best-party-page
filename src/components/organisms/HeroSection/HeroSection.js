import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { 
    StyledHeroSection, 
    StyledImageWrapper, 
    StyledContentWrapper,
    StyledTitle,
    StyledDesc,
} from './HeroSection.style'

const HeroSection = ({ title, desc, heroImage }) => 
    <StyledHeroSection>
        <StyledImageWrapper>
            <GatsbyImage
                image={getImage(heroImage.gatsbyImageData)}
                alt={heroImage.alt}
                title={heroImage.title}
            />
        </StyledImageWrapper>
        <StyledContentWrapper>
            <StyledTitle>{title}</StyledTitle>
            <StyledDesc>{desc}</StyledDesc>
        </StyledContentWrapper>
    </StyledHeroSection>


export default HeroSection