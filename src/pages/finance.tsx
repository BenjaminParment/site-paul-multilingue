import "./page-style/finance.scss";

import { FinanceDisplay } from "components/reusables/finance-display/FinanceDisplay";
import Layout from "components/layout/Layout";
import React from "react";

const FinancePage: React.FC = () => {
    const onClick = () => {};

    return (
        <Layout>
            <div className="financial-page-parent-container">
                <span className="finance-title">Test</span>
                <div className="download-container">
                    <FinanceDisplay year={2018} onClick={onClick} />
                    <FinanceDisplay year={2019} onClick={onClick} />
                    <FinanceDisplay year={2020} onClick={onClick} />
                </div>
            </div>
        </Layout>
    );
};

export default FinancePage;
