import "./FinanceDisplay.scss"

import { DownloadButton } from "../download-button/DownloadButton"
import { FormattedMessage } from "gatsby-plugin-intl"
import React from "react"

interface FinanceDisplayProps {
    year: number
    onClick: () => void
}

export const FinanceDisplay: React.FC<FinanceDisplayProps> = ({
    year,
    onClick,
}) => {
    return (
        <div className="finance-display-container">
            <span className="button-label">
                <FormattedMessage id={"finance.download_action"} />
                {year}
            </span>
            <DownloadButton onClick={onClick}>
                <FormattedMessage id={"button.download"} />
            </DownloadButton>
        </div>
    )
}
