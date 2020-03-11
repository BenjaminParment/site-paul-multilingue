import "./Header.scss"

import {
    ACTIVITIES_PATH,
    CONTACT_PATH,
    HOMEPAGE_PATH,
    PROFILE_PATH,
} from "shared/routes"
import { IntlShape, Link, injectIntl } from "gatsby-plugin-intl"

import HeaderButton from "components/header/header-button/HeaderButton"
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
                <Link className="header-title" to={HOMEPAGE_PATH}>
                    {intl.formatMessage({ id: "title" })}
                </Link>
                <span className="header-buttons">
                    <HeaderButton
                        id="header_buttons.profile"
                        pageUrl={PROFILE_PATH}
                    />
                    <HeaderButton
                        id="header_buttons.activities"
                        pageUrl={ACTIVITIES_PATH}
                    />
                    <HeaderButton
                        id="header_buttons.contact"
                        pageUrl={CONTACT_PATH}
                    />
                </span>
            </div>
            <LanguageButton value={getChangeLanguage(intl)} />
        </div>
    )
}

export default injectIntl(Header)
