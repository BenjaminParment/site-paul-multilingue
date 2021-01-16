import "./page-style/about.scss";

import Layout from "components/layout/Layout";
import React from "react";
import { MissionImage } from "components/images/about/Mission";
import { TeamImage } from "components/images/about/Team";
import { FormattedMessage } from "gatsby-plugin-intl";

const About: React.FC = () => {
    return (
        <Layout>
            <div className="about-parent-container">
                <div className="title">
                    <FormattedMessage id="about.title" />
                </div>
                <div className="mission-parent-container">
                    <div className="single-program">
                        <div className="top-container">
                            <div className="single-program-image">
                                <MissionImage />
                            </div>
                            <div className="single-program-title">
                                <FormattedMessage id="about.mission.title" />
                            </div>
                        </div>
                    </div>
                    <div className="single-program">
                        <div className="single-program-image">
                            <TeamImage />
                        </div>
                        <div className="single-program-title">
                            <FormattedMessage id="about.team.title" />
                        </div>
                    </div>
                    <div className="single-program">
                        <div className="single-program-image">
                            <TeamImage />
                        </div>
                        <div className="single-program-title">
                            <FormattedMessage id="about.presentation.title" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default About;
