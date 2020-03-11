import "./HeaderButton.scss"

import { FormattedMessage } from "gatsby-plugin-intl"
import React from "react"

interface HeaderButtonProps {
    id: string
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ id }) => {
    return (
        <div className="header-button-container">
            <button className="header-button">
                <FormattedMessage id={id} />
            </button>
        </div>
    )
}

export default HeaderButton
