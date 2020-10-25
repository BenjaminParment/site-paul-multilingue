import "./page-style/about.scss";

import Layout from "components/layout/Layout";
import React from "react";
import { MissionImage } from "components/images/about/Mission";
import { TeamImage } from "components/images/about/Team";
import { TextDisplay } from "components/reusables/text-display/TextDisplay";
import { FormattedMessage } from "gatsby-plugin-intl";

const About: React.FC = () => {
    return (
        <Layout>
            <div className="about-parent-container">
                <div className="title">
                    <FormattedMessage id="about.title" />
                </div>
                <div className="mission">
                    <TextDisplay image={<MissionImage />}>
                        <>Missie</>
                    </TextDisplay>
                </div>
                <div className="mission">
                    <TextDisplay image={<TeamImage />}>
                        <>Team</>
                    </TextDisplay>
                </div>
            </div>
        </Layout>
    );
};

export default About;
