import "./Footer.scss";

import { FormattedMessage } from "gatsby-plugin-intl";
import React from "react";
import { Link } from "gatsby-plugin-intl";
import { ABOUT_PATH, CONTACT_PATH, INFO_PATH } from "shared/routes";

class Footer extends React.Component {
    render = () => (
        <div className="footer-parent-container">
            <div className="footer-info">
                <span className="column">
                    <Link to={ABOUT_PATH}>
                        <FormattedMessage id="footer.left" />
                    </Link>
                </span>
                <span className="column">
                    <Link to={INFO_PATH}>
                        <FormattedMessage id="footer.middle" />
                    </Link>
                </span>
                <span className="column">
                    <Link to={CONTACT_PATH}>
                        <FormattedMessage id="footer.right" />
                    </Link>
                </span>
            </div>
        </div>
    );
}

export default Footer;
