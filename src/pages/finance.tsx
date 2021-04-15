import Layout from "components/layout/Layout";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import "./page-style/finance.scss";

const FinancePage: React.FC = () => {
    let data = useStaticQuery(graphql`
        {
            allFile(filter: { extension: { eq: "pdf" } }, sort: { fields: [name], order: DESC }) {
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

    const renderSingleHref = (data: any) => {
        return (
            <div className="single-download-container" key={data.node.name}>
                <span className="year">{grabName(data.node.name)}</span>
                <a href={data.node.publicURL} download>
                    <button className="button">Download pdf</button>
                </a>
            </div>
        );
    };

    return (
        <Layout>
            <div className="financial-page-parent-container">
                <div className="download-buttons">{data.allFile.edges.map(renderSingleHref)}</div>
            </div>
        </Layout>
    );
};

export default FinancePage;
