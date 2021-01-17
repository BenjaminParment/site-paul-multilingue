import "./page-style/finance.scss";

import Layout from "components/layout/Layout";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const FinancePage: React.FC = () => {
    const data = useStaticQuery(graphql`
        {
            allFile(filter: { extension: { eq: "pdf" } }) {
                edges {
                    node {
                        publicURL
                        name
                    }
                }
            }
        }
    `);

    const grabName = (index: string): string => {
        return index.replace(/[^0-9]/g, "");
    };

    return (
        <Layout>
            <div className="financial-page-parent-container">
                <div className="download-buttons">
                    <div className="single-download-container">
                        <span className="year">{grabName(data.allFile.edges[0].node.name)}</span>
                        <a href={data.allFile.edges[0].node.publicURL} download>
                            <button className="button">Download pdf</button>
                        </a>
                    </div>
                    <div className="single-download-container">
                        <span className="year">{grabName(data.allFile.edges[2].node.name)}</span>
                        <a href={data.allFile.edges[2].node.publicURL} download>
                            <button className="button">Download pdf</button>
                        </a>
                    </div>
                    <div className="single-download-container">
                        <span className="year">{grabName(data.allFile.edges[1].node.name)}</span>
                        <a href={data.allFile.edges[1].node.publicURL} download>
                            <button className="button">Download pdf</button>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default FinancePage;
