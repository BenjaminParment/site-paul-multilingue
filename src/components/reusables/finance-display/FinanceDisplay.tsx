import "./FinanceDisplay.scss";

import { DownloadButton } from "../download-button/DownloadButton";
import { FormattedMessage } from "gatsby-plugin-intl";
import React from "react";

interface FinanceDisplayProps {
    year: number;
    path: string;
}

export const FinanceDisplay: React.FC<FinanceDisplayProps> = ({ year, path }) => {
    return (
        <div className="finance-display-container">
            <span className="button-label">
                <FormattedMessage id={"finance.download_action"} />
                {year}
            </span>
            <DownloadButton path={path}>
                <FormattedMessage id={"button.download"} />
            </DownloadButton>
        </div>
    );
};
