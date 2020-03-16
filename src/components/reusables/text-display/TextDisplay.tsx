import "./TextDisplay.scss"

import React from "react"

interface TextDisplayProps {
    children: JSX.Element | JSX.Element[]
    image?: JSX.Element
    imageStyle?: string
}

export const TextDisplay: React.FC<TextDisplayProps> = ({
    children,
    image,
    imageStyle,
}) => {
    return (
        <div className="text-display-container">
            <div className={imageStyle}>{image}</div>
            <div className="text-container">{children}</div>
        </div>
    )
}
