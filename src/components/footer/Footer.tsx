import "./Footer.scss"

import { FormattedMessage } from "gatsby-plugin-intl"
import React from "react"

class Footer extends React.Component {
    render = () => (
        <div className="footer-parent-container">
            <div className="footer-info">
                <span className="single-info">
                    <FormattedMessage id={"footer.footer_1"} />
                </span>
                <span className="single-info">
                    <FormattedMessage id={"footer.footer_2"} />
                </span>
                <span className="single-info">RSIN 858489995</span>
                <span className="single-info">
                    Lekstraat 74-2 1079ET Amsterdam
                </span>
            </div>
        </div>
    )
}

export default Footer
