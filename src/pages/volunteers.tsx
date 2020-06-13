import "./page-style/board.scss"

import { FormattedMessage } from "gatsby-plugin-intl"
import Layout from "components/layout/Layout"
import { Profile1Image } from "components/images/volunteers/Profil1Image"
import { Profile2Image } from "components/images/volunteers/Profile2Image"
import { Profile3Image } from "components/images/volunteers/Profile3Image"
import { ProfileDescription } from "components/reusables/profile-description/ProfileDescription"
import React from "react"

const VolunteersPage: React.FC = () => {
    return (
        <Layout>
            <div className="board-parent-container">
                <div className="left-container">
                    <span className="board-title">
                        <FormattedMessage id="volunteers.title" />
                    </span>
                    <ProfileDescription
                        id="volunteers.profile_1"
                        image={<Profile1Image />}
                    />
                    <ProfileDescription
                        id="volunteers.profile_2"
                        image={<Profile2Image />}
                    />
                    <ProfileDescription
                        id="volunteers.profile_3"
                        image={<Profile3Image />}
                    />
                </div>
                <div className="right-container">
                    <FormattedMessage id="volunteers.description" />
                </div>
            </div>
        </Layout>
    )
}

export default VolunteersPage
