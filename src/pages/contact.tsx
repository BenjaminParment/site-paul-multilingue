import "./page-style/contact.scss";

import { FormattedMessage } from "gatsby-plugin-intl";
import Layout from "components/layout/Layout";
import React from "react";

const ContactPage: React.FC = () => {
    return (
        <Layout>
            <div className="contact-page-container">
                <span className="contact-title">
                    <FormattedMessage id="contact.title" />
                </span>
                <span className="contact-content">
                    <FormattedMessage id="contact.text" />
                </span>
            </div>
        </Layout>
    );
};

export default ContactPage;
