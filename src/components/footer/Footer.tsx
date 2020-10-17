import "./Footer.scss";

import { FormattedMessage } from "gatsby-plugin-intl";
import React from "react";

class Footer extends React.Component {
    render = () => (
        <div className="footer-parent-container">
            <div className="footer-info">
                <span className="column">
                    <FormattedMessage id="footer.left" />
                </span>
                <span className="column">
                    <FormattedMessage id="footer.middle" />
                </span>
                <span className="column">
                    <FormattedMessage id="footer.right" />
                </span>
            </div>
        </div>
    );
}

export default Footer;
