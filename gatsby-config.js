const path = require("path")

module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
    },
    plugins: [
        `gatsby-plugin-typescript`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: "gatsby-plugin-root-import",
            options: {
                src: path.join(__dirname, "src"),
                components: path.join(__dirname, "src/components"),
                pages: path.join(__dirname, "src/pages"),
                shared: path.join(__dirname, "src/shared"),
                intl: path.join(__dirname, "src/intl"),
            },
        },
        {
            resolve: `gatsby-plugin-intl`,
            options: {
                // language JSON resource path
                path: path.join(__dirname, `src`, `intl`),
                // supported language
                languages: [`nl`, `fr`],
                // language file path
                defaultLanguage: `nl`,
                // option to redirect to `/nl` when connecting `/`
                redirect: true,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`),
            },
        },
        {

            resolve: `gatsby-source-filesystem`,
            options: {
                name: `downloads`,
                path: path.join(__dirname, `src`, `downloads`),
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
