import "./index.scss"

import { IntlProvider, IntlShape, injectIntl } from "gatsby-plugin-intl"

import Home from "components/home/Home"
import React from "react"
import flatten from "flat"
import fr from "intl/fr.json" // French Content
import nl from "intl/nl.json" // Dutch Content

const messages = { fr, nl }

interface IndexPageProps {
    intl: IntlShape
}

const IndexPage: React.FC<IndexPageProps> = ({ intl }) => {
    return (
        <IntlProvider
            locale={intl.locale}
            defaultLocale={"nl"}
            messages={flatten(messages[intl.locale])}
        >
            <Home />
        </IntlProvider>
    )
}

export default injectIntl(IndexPage)
