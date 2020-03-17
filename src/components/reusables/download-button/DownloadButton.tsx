import "./DownloadButton.scss"

import React from "react"

interface DownloadButtonProps {
    children: JSX.Element | JSX.Element[]
    onClick: () => void
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
    children,
    onClick,
}) => {
    return (
        <div className="download-button-parent-container">
            <button className="download-button" onClick={onClick}>
                {children}
            </button>
        </div>
    )
}
