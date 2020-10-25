/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Owen Young's Timeline`,
    siteUrl: `https://theowenyoung.github.io`,
    author: "Owen Young",
    description: "All my stories are here",
    social: [
      {
        name: "Twitter",
        url: "https://twitter.com/TheOwenYoung",
      },
      {
        name: "Github",
        url: "https://github.com/theowenyoung",
      },
    ],
  },
  plugins: [
    {
      resolve: `@theowenyoung/gatsby-source-git`,
      options: {
        name: `story`,
        remote: `https://github.com/theowenyoung/story.git`,
        branch: `main`,
        // Only import the docs folder from a codebase.
        patterns: ["content/**", "data/**"],
      },
    },
    {
      resolve: `gatsby-theme-timeline`,
      options: {
        jsonTransformerOptions: {
          typeName: ({ node }) => {
            const rootDirectoryName = node.relativeDirectory.split(`/`)[1]
            const rootDirectoryNameCapitalized =
              rootDirectoryName.charAt(0).toUpperCase() +
              rootDirectoryName.slice(1)
            return `${rootDirectoryNameCapitalized}Json`
          },
        },
      },
    },
    {
      resolve: `gatsby-theme-timeline`,
      options: {
        basePath: "/zh/",
        jsonTransformerOptions: {
          typeName: ({ node }) => {
            const rootDirectoryName = node.relativeDirectory.split(`/`)[1]
            const rootDirectoryNameCapitalized =
              rootDirectoryName.charAt(0).toUpperCase() +
              rootDirectoryName.slice(1)
            return `${rootDirectoryNameCapitalized}Json`
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", disallow: ["/"] }],
      },
    },
  ],
}
