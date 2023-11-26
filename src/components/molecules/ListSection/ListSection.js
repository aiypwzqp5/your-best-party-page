import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { 
    StyledListSection,
    StyledImageWrapper,
    StyledContentWrapper,
    StyledList,
    StyledCircleWrapper
} from "./ListSection.styles"
import { StyledSecondTitle } from '../../../styles/sharedStyles'
import Circle from '../../atoms/Icons/Circle'

const ListSection = ({ image, title, list }) =>
    <StyledListSection>
        <StyledCircleWrapper>
            <Circle />
        </StyledCircleWrapper>
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