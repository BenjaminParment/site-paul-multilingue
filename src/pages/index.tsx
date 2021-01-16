import "./page-style/index.scss";

import { HomepageImage } from "components/images/homepage/HomepageImage";
import Layout from "components/layout/Layout";
import { ProgramsDisplay } from "components/programs-display/ProgramsDisplay";
import React from "react";
import { News } from "components/news/News";

const IndexPage: React.FC = () => {
    return (
        <Layout>
            <div className="index-parent-container">
                <div className="top-container">
                    <div className="image-container">
                        <HomepageImage className="image" />
                    </div>
                </div>
                <News></News>
                <div className="bottom-container">
                    <ProgramsDisplay />
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
