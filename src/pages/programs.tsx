import "./page-style/programs.scss"

import Layout from "components/layout/Layout"
import React from "react"
import { Tabs } from "components/tabs/Tabs"

export const PROGRAMS_TABS = ["Education RDC 2025", "VIE", "BOPETO"]

const ProgramsPage: React.FC = () => {
    return (
        <Layout>
            <div className="programs-parent-container">
                <div className="tabs">
                    <Tabs tabs={PROGRAMS_TABS} />
                </div>
            </div>
        </Layout>
    )
}

export default ProgramsPage
