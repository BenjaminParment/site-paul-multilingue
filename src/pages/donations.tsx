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
                    <div className="left-container">
                        <FormattedMessage id="donations.description.1" />
                        <br />
                        <br />
                        <FormattedMessage id="donations.description.2" />
                    </div>
                    <div className="right-container">
                        <div className="video-title">
                            <FormattedMessage id="donations.video.1.title" />
                        </div>
                        <div className="video">Video</div>
                        <div className="video-title">
                            <FormattedMessage id="donations.video.2.title" />
                        </div>
                        <div className="video">Video 2</div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default DonationsPage;
