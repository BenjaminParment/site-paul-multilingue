import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import React from "react"

const Image: React.FC = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "picture_1.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image
