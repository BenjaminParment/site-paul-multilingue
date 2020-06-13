import "./page-style/donations.scss"

import Layout from "components/layout/Layout"
import React from "react"

const DonationsPage: React.FC = () => {
    return (
        <Layout>
            <div className="donation-page-container">
                <span className="donation-title">Title</span>
                <div className="bottom-container">
                    <span className="left-container">Text</span>
                    <div className="right-container">Thingy</div>
                </div>
            </div>
        </Layout>
    )
}

export default DonationsPage;