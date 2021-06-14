/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Matthew Gadsden',
    description: "Matthew Gadsden's personal website.",
    url: 'https://www.matthewgadsden.com',
    titleTemplate: '%s | Matthew Gadsden',
    keywords: [
      'Matthew Gadsden',
      'Software Developer',
      'Australia',
    ],
  },

  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
