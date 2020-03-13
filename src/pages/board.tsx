import "./page-style/board.scss"

import { FormattedMessage } from "gatsby-plugin-intl"
import Layout from "components/layout/Layout"
import { ProfileDescription } from "components/reusables/profile-description/ProfileDescription"
import { QuestionMarkImage } from "components/images/QuestionMarkImage"
import React from "react"

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
                        image={<QuestionMarkImage />}
                    />
                    <ProfileDescription
                        id="board.ward"
                        image={<QuestionMarkImage />}
                    />
                    <ProfileDescription
                        id="board.luc"
                        image={<QuestionMarkImage />}
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
