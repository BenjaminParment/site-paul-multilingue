import "./page-style/board.scss";

import { FormattedMessage } from "gatsby-plugin-intl";
import Layout from "components/layout/Layout";
import { Profile1Image } from "components/images/volunteers/Profil1Image";
import { Profile2Image } from "components/images/volunteers/Profile2Image";
import { ProfileDescription } from "components/reusables/profile-description/ProfileDescription";
import React from "react";

const VolunteersPage: React.FC = () => {
    return (
        <Layout>
            <div className="board-parent-container">
                <div className="left-container">
                    <span className="board-title">
                        <FormattedMessage id="volunteers.title" />
                        <span className="content">
                            <FormattedMessage id="volunteers.description" />
                        </span>
                    </span>
                    <ProfileDescription id="volunteers.profile_1" image={<Profile1Image />} />
                    <ProfileDescription id="volunteers.profile_2" image={<Profile2Image />} />
                </div>
            </div>
        </Layout>
    );
};

export default VolunteersPage;
