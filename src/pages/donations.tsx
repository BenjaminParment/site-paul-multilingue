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
                    </div>
                    <div className="right-container">
                        <div className="video-title">
                            <FormattedMessage id="donations.video.1.title" />
                        </div>
                        <div className="video">
                            <iframe
                                src={"https://www.youtube.com/embed/wxy4wiPhJkY"}
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                frameBorder="0"
                                webkitallowfullscreen="true"
                                mozallowfullscreen="true"
                                allowFullScreen
                            />
                        </div>
                        <div className="video-title">
                            <FormattedMessage id="donations.video.2.title" />
                        </div>
                        <div className="video">
                            <iframe
                                src={"https://www.youtube.com/embed/VA261-XC5n4"}
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                frameBorder="0"
                                webkitallowfullscreen="true"
                                mozallowfullscreen="true"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default DonationsPage;
