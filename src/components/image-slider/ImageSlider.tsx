import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"

const PICTURE_COUNT = 2
const TIME_INTERVAL = 5000

const ImageSlider = () => {
    const [index, setIndex] = useState(0)
    const { allFile } = useStaticQuery(
        graphql`
            query {
                allFile(
                    sort: { fields: name, order: DESC }
                    filter: { relativeDirectory: { eq: "test" } }
                ) {
                    edges {
                        node {
                            id
                            name
                            childImageSharp {
                                fluid(maxWidth: 1000) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        `
    )
    //Minus 1 for array offset from 0

    setInterval(() => {
        let newIndex = index
        if (newIndex === PICTURE_COUNT - 1) {
            newIndex = 0
        } else {
            newIndex++
        }
        setIndex(newIndex)
    }, TIME_INTERVAL)

    const { node } = allFile.edges[index]
    return (
        <Img
            fluid={node.childImageSharp.fluid}
            key={node.id}
            alt={node.name.replace(/-/g, " ").substring(2)}
        />
    )
}

export default ImageSlider
