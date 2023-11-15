/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `your-best-party-page`,
    siteUrl: `https://yourbestpartypage.pl`
  },
  plugins: [
    "gatsby-plugin-styled-components", 
    "gatsby-plugin-image",
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area. Make sure to grant both CDA and CMA permissions.
        apiToken: process.env.GATSBY_DATO_CMS_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `your-best-party-page`,
        short_name: `YourBestParty`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: 'src/images/icon.png'
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://yourbestpartypage.pl',
        sitemap: 'https://yourbestpartypage.pl/sitemap-index.xml',
        policy: [process.env.NODE_ENV === 'production' 
          ? {userAgent: '*', allow: '/'} 
          : {userAgent: '*', disallow: '/'}
        ]
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
          {
            allSitePage {
              nodes {
                path
              }
            }
            site {
              siteMetadata {
                siteUrl
              }
            }
          }
        `,
        resolveSiteUrl: ({
          site: {
            siteMetadata: { siteUrl },
          },
        }) => siteUrl,
        resolvePages: ({
          allSitePage: { nodes },
          site: {
            siteMetadata: { siteUrl },
          },
        }) =>
          nodes.map(({ path }) => ({
            url: `${siteUrl}${path}`,
            path,
            changefreq: "daily",
            priority: 0.7,
          })),
        serialize: ({ path }) => ({
          url: path,
        }),
      },
    },
  ]
};