import "./page-style/finance.scss"

import { DownloadButton } from "components/reusables/download-button/DownloadButton"
import Layout from "components/layout/Layout"
import React from "react"

const FinancePage: React.FC = () => {
    const onClick = () => {}

    return (
        <Layout>
            <div className="financial-page-parent-container">
                <span className="finance-title">Test</span>
                <div className="download-container">
                    <DownloadButton display="2017" onClick={onClick} />
                    <DownloadButton display="2018" onClick={onClick} />
                    <DownloadButton display="2019" onClick={onClick} />
                    <DownloadButton display="2020" onClick={onClick} />
                    <DownloadButton display="2021" onClick={onClick} />
                    <DownloadButton display="2021" onClick={onClick} />
                    <DownloadButton display="2021" onClick={onClick} />
                    <DownloadButton display="2021" onClick={onClick} />
                    <DownloadButton display="2021" onClick={onClick} />
                    <DownloadButton display="2021" onClick={onClick} />
                    <DownloadButton display="2021" onClick={onClick} />
                    <DownloadButton display="2021" onClick={onClick} />
                    <DownloadButton display="2021" onClick={onClick} />
                    <DownloadButton display="2021" onClick={onClick} />
                    <DownloadButton display="2021" onClick={onClick} />
                    <DownloadButton display="2021" onClick={onClick} />
                    <DownloadButton display="2021" onClick={onClick} />
                </div>
            </div>
        </Layout>
    )
}

export default FinancePage
