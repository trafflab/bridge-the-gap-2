/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `bridge-the-gap-2`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    // "gatsby-plugin-react-helmet",
    // "gatsby-plugin-google-gtag",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  // {
  //   resolve: `gatsby-plugin-google-gtag`,
  //   options: {
  //     trackingIds: [
  //       "G-ZW62X7F53H",
  //     ],
  //     pluginConfig: {
  //       head: true,
  //       respectDNT: false,
  //     },
  //   },
  // },
]
};