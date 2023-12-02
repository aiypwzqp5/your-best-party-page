import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { 
    StyledRealizationCard, 
    StyledImageWrapper, 
    StyledTitleWrapper,
    StyledTitle
} from "./RealizationCard.styles"

const RealizationCard = ({ image, title }) => (
    <StyledRealizationCard>
        <StyledImageWrapper>
            <GatsbyImage objectFit="fill"
         image={getImage(image.gatsbyImageData)} alt={image.alt} />
        </StyledImageWrapper>
        <StyledTitleWrapper>
            <StyledTitle>
                {title}
            </StyledTitle>
        </StyledTitleWrapper>
    </StyledRealizationCard>
)

export default RealizationCard