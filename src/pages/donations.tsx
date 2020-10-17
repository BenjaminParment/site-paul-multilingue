import "./page-style/donations.scss";

import { FormattedMessage } from "gatsby-plugin-intl";
import Layout from "components/layout/Layout";
import React from "react";

const DonationsPage: React.FC = () => {
    return (
        <Layout>
            <div className="donation-page-container">
                <span className="donation-title">
                    <FormattedMessage id="donations.title" />
                </span>
                <div className="bottom-container">
                    <span className="left-container">Text</span>
                    <div className="right-container">
                        <div className="video-title">Titre de le video</div>
                        <div className="video">Video</div>
                        <div className="video-title">Titre de le video</div>
                        <div className="video">Titre 2</div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default DonationsPage;
