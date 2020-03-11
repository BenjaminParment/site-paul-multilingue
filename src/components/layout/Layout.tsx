import "./Layout.scss"

import { IntlProvider, IntlShape, injectIntl } from "gatsby-plugin-intl"

import Footer from "components/footer/Footer"
import Header from "components/header/Header"
import React from "react"
import flatten from "flat"
import fr from "intl/fr.json" // French Content
import nl from "intl/nl.json" // Dutch Content

const messages = { fr, nl }

interface Props {
    children: JSX.Element[] | JSX.Element
    intl: IntlShape
}

const Layout: React.FC<Props> = ({ children, intl }) => {
    return (
        <IntlProvider
            locale={intl.locale}
            defaultLocale={"nl"}
            messages={flatten(messages[intl.locale])}
        >
            <Header />
            <div className="body-parent-container">{children}</div>
            <Footer />
        </IntlProvider>
    )
}

export default injectIntl(Layout)
