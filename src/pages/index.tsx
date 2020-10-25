import "./page-style/index.scss";

import { FormattedMessage } from "gatsby-plugin-intl";
import { HomepageImage } from "components/images/homepage/HomepageImage";
import Layout from "components/layout/Layout";
import { ProgramsDisplay } from "components/programs-display/ProgramsDisplay";
import React from "react";
import { TextDisplay } from "components/reusables/text-display/TextDisplay";

const IndexPage: React.FC = () => {
    return (
        <Layout>
            <div className="index-parent-container">
                <div className="top-container">
                    <div className="image-container">
                        <HomepageImage className="image" />
                        <div className="text">
                            <FormattedMessage id="homepage.picture_text" />
                        </div>
                    </div>
                </div>
                <div className="bottom-container">
                    <ProgramsDisplay />
                </div>
                <div className="achievements">
                    <TextDisplay image={<HomepageImage />}>
                        <>
                            blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
                            blah
                        </>
                    </TextDisplay>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
