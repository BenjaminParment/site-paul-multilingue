import "./Header.scss"

import { IntlShape, injectIntl } from "gatsby-plugin-intl"

import HeaderButton from "components/reusables/header-button/HeaderButton"
import LanguageButton from "components/header/language-button/LanguageButton"
import React from "react"
import { getChangeLanguage } from "shared/utils/languageUtils"

interface HeaderProps {
    intl: IntlShape
}

const Header: React.FC<HeaderProps> = ({ intl }) => {
    return (
        <div className="header-parent-container">
            <div className="left-container">
                <span className="header-title">
                    {intl.formatMessage({ id: "title" })}
                </span>
                <HeaderButton id="header_buttons.header_1" />
                <HeaderButton id="header_buttons.header_2" />
                <HeaderButton id="header_buttons.header_3" />
            </div>
            <LanguageButton value={getChangeLanguage(intl)} />
        </div>
    )
}

export default injectIntl(Header)
