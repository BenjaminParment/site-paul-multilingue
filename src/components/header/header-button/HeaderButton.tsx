import "./HeaderButton.scss"

import { FormattedMessage } from "gatsby-plugin-intl"
import { Link } from "gatsby-plugin-intl"
import React from "react"

interface HeaderButtonProps {
    id: string
    pageUrl: string
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ id, pageUrl }) => {
    return (
        <div className="header-button-container">
            <Link to={pageUrl} className="header-button">
                <FormattedMessage id={id} />
            </Link>
        </div>
    )
}

export default HeaderButton
