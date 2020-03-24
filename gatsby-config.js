module.exports = {
  siteMetadata: {
    title: `Hutch Games`,
    description: `Website for Hutch Games`,
    author: `@chrish-d`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `./static/images/` },
    },
  ],
};
