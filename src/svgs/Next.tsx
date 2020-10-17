import React from "react";
import { SVGProps } from "./svgProps";

export const Next: React.FC<SVGProps> = ({ height, width }) => {
    return (
        <svg {...height} {...width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            <path d="M0 0h24v24H0V0z" fill="none" />
        </svg>
    );
};
