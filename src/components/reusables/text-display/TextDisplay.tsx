import "./TextDisplay.scss";

import React from "react";

interface TextDisplayProps {
    children: JSX.Element | JSX.Element[];
    image?: JSX.Element;
}

export const TextDisplay: React.FC<TextDisplayProps> = ({ children, image }) => {
    return (
        <div className="text-display-container">
            <div className="image">{image}</div>
            <div className="text-container">{children}</div>
        </div>
    );
};
