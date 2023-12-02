import React from 'react'
import Slider from 'react-slick'
import { useStaticQuery, graphql, Link } from 'gatsby'

import RealizationCard from "../../atoms/RealizationCard/RealizationCard"
import { StyledOurRealizationsSection, StyledSliderWrapper } from "./OurRealizationsSection.styles"
import { StyledSecondTitle } from '../../../styles/sharedStyles'
import { OurRealizationsSectionLabels } from './OurRealizationsSection.data'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurRealizationsSection = () => {
    const { allDatoCmsRealizacja } = useStaticQuery(graphql`
        query RealizationSection {
            allDatoCmsRealizacja {
                edges {
                    node {
                        miniaturka {
                            alt
                            gatsbyImageData
                        }
                        tytu
                        slug
                    }
                }
            }
        }
    `)

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
                }
            }
        ]
    }

  return (
    <StyledOurRealizationsSection>
        <StyledSecondTitle $desktopTextAlign="center">
            {OurRealizationsSectionLabels.heading}
        </StyledSecondTitle>
        <StyledSliderWrapper>
            <Slider {...settings}>
                {allDatoCmsRealizacja.edges.map(({ node }) => (
                    <Link key={node.slug} to={`/realizacja/${node.slug}`}>
                        <RealizationCard
                            image={node.miniaturka}
                            title={node.tytu}
                        />
                    </Link>
                ))}
            </Slider>
        </StyledSliderWrapper>
    </StyledOurRealizationsSection>
  )
}

export default OurRealizationsSection