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
                <span className="title">All PDF Downloads</span>
                <div className="download-buttons">
                    {data.allFile.edges.map((file: any, index: string) => {
                        return (
                            <div className="single-download-container" key={`pdf-${index}`}>
                                <span className="year">{grabName(file.node.name)}</span>
                                <a href={file.node.publicURL} download>
                                    <button className="button">Download pdf</button>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
};

export default FinancePage;
