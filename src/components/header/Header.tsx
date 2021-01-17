import "./Header.scss";

import { ABOUT_PATH, CONTACT_PATH, DONATIONS_PATH, FINANCE_PATH, HOMEPAGE_PATH, PROGRAMS_PATH } from "shared/routes";
import { IntlShape, Link, injectIntl } from "gatsby-plugin-intl";

import HeaderButton from "components/header/header-button/HeaderButton";
import { HeaderButtonDropdown } from "./header-button-dropdown/HeaderButtonDropdown";
import LanguageButton from "components/header/language-button/LanguageButton";
import React from "react";
import { getChangeLanguage } from "shared/utils/languageUtils";
import { Logo } from "components/images/logo/Logo";

interface HeaderProps {
    intl: IntlShape;
}

const Header: React.FC<HeaderProps> = ({ intl }) => {
    return (
        <div className="header-parent-container">
            <div className="left-container">
                <Link className="header-title" to={HOMEPAGE_PATH}>
                    <Logo className="logo" />
                </Link>
                <span className="header-buttons">
                    <HeaderButton id="header_buttons.about" pageUrl={ABOUT_PATH} />
                    <HeaderButton id="header_buttons.programs" pageUrl={PROGRAMS_PATH} />
                    <HeaderButton id="header_buttons.donations" pageUrl={DONATIONS_PATH} />
                    <HeaderButton id="header_buttons.finance" pageUrl={FINANCE_PATH} />
                    {/* Pofile dropdown */}
                    <HeaderButtonDropdown />
                    <HeaderButton id="header_buttons.contact" pageUrl={CONTACT_PATH} />
                </span>
            </div>
            <LanguageButton value={getChangeLanguage(intl)} />
        </div>
    );
};

export default injectIntl(Header);
