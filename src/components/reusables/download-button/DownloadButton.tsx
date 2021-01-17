import "./DownloadButton.scss";

import React from "react";

interface DownloadButtonProps {
    children: JSX.Element | JSX.Element[];
    path: string;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ children, path }) => {
    return (
        <div className="download-button-parent-container">
            <a className="download-button" href={path} download>
                {children}
            </a>
        </div>
    );
};
