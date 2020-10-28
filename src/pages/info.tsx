import "./page-style/info.scss";

import { FormattedMessage } from "gatsby-plugin-intl";
import Layout from "components/layout/Layout";
import React from "react";

const InfoJuridique: React.FC = () => {
    return (
        <Layout>
            <div className="info-page-container">
                <span className="info-title">
                    <FormattedMessage id="info.title" />
                </span>
                <span className="info-content">
                    <FormattedMessage id="info.text" />
                </span>
            </div>
        </Layout>
    );
};

export default InfoJuridique;
