import { graphql, useStaticQuery } from "gatsby"

import { ImageProps } from "./ImageProps"
import Img from "gatsby-image"
import React from "react"

export const QuestionMarkImage: React.FC<ImageProps> = ({ className }) => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "picture_4.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 840, maxHeight: 880) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            className={className}
        />
    )
}
