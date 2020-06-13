import "./page-style/board.scss"

import { FormattedMessage } from "gatsby-plugin-intl"
import Layout from "components/layout/Layout"
import { LucProfileImage } from "components/images/board/Luc"
import { PaulProfileImage } from "components/images/board/Paul"
import { ProfileDescription } from "components/reusables/profile-description/ProfileDescription"
import React from "react"
import { WardProfileImage } from "components/images/board/Ward"

const BoardPage: React.FC = () => {
    return (
        <Layout>
            <div className="board-parent-container">
                <div className="left-container">
                    <span className="board-title">
                        <FormattedMessage id="board.title" />
                    </span>
                    <ProfileDescription
                        id="board.paul"
                        image={<PaulProfileImage />}
                    />
                    <ProfileDescription
                        id="board.ward"
                        image={<WardProfileImage />}
                    />
                    <ProfileDescription
                        id="board.luc"
                        image={<LucProfileImage />}
                    />
                </div>
                <div className="right-container">
                    <FormattedMessage id="board.description" />
                </div>
            </div>
        </Layout>
    )
}

export default BoardPage
