import { graphql, useStaticQuery } from "gatsby";

import { ImageProps } from "../ImageProps";
import Img from "gatsby-image";
import React from "react";

export const BOPETOProgram: React.FC<ImageProps> = ({ className }) => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "image4.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1920, maxHeight: 1920) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return <Img fluid={data.placeholderImage.childImageSharp.fluid} className={className} />;
};
