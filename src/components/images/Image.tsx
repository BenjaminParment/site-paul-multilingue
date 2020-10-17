import { graphql, useStaticQuery } from "gatsby";

import { ImageProps } from "./ImageProps";
import Img from "gatsby-image";
import React from "react";

export const Image: React.FC<ImageProps> = ({ className }) => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "picture_3.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920, maxHeight: 1080) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return <Img fluid={data.placeholderImage.childImageSharp.fluid} className={className} />;
};
