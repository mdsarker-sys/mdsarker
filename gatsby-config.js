// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://gatsbydatocmshomepage.gatsbyjs.io/",
    title: "Gatsby DatoCMS Homepage Starter",
    author: `Gatsby`,
    description: "A Gatsby Starter for building homepages with DatoCMS",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "2ddabfe95e58da3f492b26e3843db6",
        environment: `main`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-vanilla-extract",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Starter DatoCMS Homepage",
        short_name: "Gatsby",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#ffffff",
        theme_color: "#db3000",
        icon: "src/favicon.png",
      },
    },
  ],
}
