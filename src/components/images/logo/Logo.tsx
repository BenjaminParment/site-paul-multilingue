import { graphql, useStaticQuery } from "gatsby";

import { ImageProps } from "../ImageProps";
import Img from "gatsby-image";
import React from "react";

export const Logo: React.FC<ImageProps> = ({ className }) => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    fluid(maxWidth: 90, maxHeight: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return <Img fluid={data.placeholderImage.childImageSharp.fluid} className={className} />;
};
