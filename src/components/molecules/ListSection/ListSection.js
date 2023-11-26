import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { 
    StyledListSection,
    StyledImageWrapper,
    StyledContentWrapper,
    StyledList
} from "./ListSection.styles"
import { StyledSecondTitle } from '../../../styles/sharedStyles'

const ListSection = ({ image, title, list }) =>
    <StyledListSection>
        <StyledImageWrapper>
            <GatsbyImage alt={image.alt} image={getImage(image.gatsbyImageData)} />
        </StyledImageWrapper>
        <StyledContentWrapper>
            <StyledSecondTitle>
                {title}
            </StyledSecondTitle>
            <StyledList>
                {list.map(({ element, id }) => (
                    <li key={id}>{element}</li>
                ))}
            </StyledList>
        </StyledContentWrapper>
    </StyledListSection>

export default ListSection