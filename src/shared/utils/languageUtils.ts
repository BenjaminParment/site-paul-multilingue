import { IntlShape, changeLocale, } from 'gatsby-plugin-intl';

export const changeLang = (locale: string) => {
    changeLocale(locale);
}

export const getChangeLanguage = (intl: IntlShape): string => {
    if (intl.locale === "fr") {
        return "nl";
    }
    return "fr";
}