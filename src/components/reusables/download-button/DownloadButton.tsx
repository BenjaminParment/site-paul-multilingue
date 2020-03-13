import "./DownloadButton.scss"

import React from "react"

interface DownloadButtonProps {
    display: string
    onClick: () => void
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
    display,
    onClick,
}) => {
    return (
        <div className="download-button-parent-container">
            <button className="download-button" onClick={onClick}>
                {display}
            </button>
        </div>
    )
}
