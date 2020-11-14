/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const _ = require("lodash")
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Owen Young's Timeline`,
    siteUrl: `https://blog.owenyoung.com`,
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
      {
        name: "RSS",
        url: "/rss.xml",
      },
      {
        name: "中文RSS",
        url: "/zh/rss.xml",
      },
      {
        name: "English",
        url: "/",
      },
      {
        name: "中文",
        url: "/zh",
      },
      {
        name: "Source",
        url: "https://github.com/theowenyoung/story",
      },
      {
        name: "Site Source",
        url: "https://github.com/theowenyoung/theowenyoung.github.io",
      },
    ],
  },
  plugins: [
    {
      resolve: `@theowenyoung/gatsby-source-git`,
      options: {
        name: `content/posts`,
        remote: `https://github.com/theowenyoung/story.git`,
        branch: `main`,
        // Only import the docs folder from a codebase.
        patterns: ["content/posts/**", "content/assets/**", "data/tweets/**"],
      },
    },
    {
      resolve: `@theowenyoung/gatsby-source-git`,
      options: {
        name: `content/posts-zh`,
        remote: `https://github.com/theowenyoung/story.git`,
        branch: `main`,
        // Only import the docs folder from a codebase.
        patterns: ["content/posts-zh/**", "data/tweets-zh/**"],
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: ({ node }) => {
          const rootDirectoryName = node.relativeDirectory.split(`/`)[1]
          return _.upperFirst(_.camelCase(`${rootDirectoryName} Json`))
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
              linkImagesToOriginal: false,
            },
          },
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: `gatsby-remark-smartypants` },
        ],
        remarkPlugins: [require(`remark-slug`), require(`remark-emoji`)],
      },
    },
    {
      resolve: `gatsby-theme-timeline`,
      options: {
        mdxOtherwiseConfigured: true,
        shouldTransformJson: false,
        contentPath: "content/posts",
        postsFilter: {
          tags: {
            in: ["en"],
          },
        },
      },
    },
    {
      resolve: `gatsby-theme-timeline`,
      options: {
        basePath: "/zh",
        contentPath: "content/posts-zh",
        tweetTypeName: "TweetsZhJson",
        mdxOtherwiseConfigured: true,
        shouldTransformJson: false,
        postsFilter: {
          tags: {
            in: ["zh"],
          },
        },
      },
    },
    // {
    //   resolve: "gatsby-plugin-robots-txt",
    //   options: {
    //     policy: [{ userAgent: "*", disallow: ["/"] }],
    //   },
    // },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allBlogPost } }) => {
              return allBlogPost.nodes
                .filter(node => {
                  let locale = "en"
                  if (node.__typename === "MdxBlogPost") {
                    locale =
                      node.parent.parent.sourceInstanceName ===
                      "content/posts-zh"
                        ? "zh"
                        : "en"
                  } else if (node.__typename === "TweetPost") {
                    locale =
                      node.parent.__typename === "TweetsZhJson" ? "zh" : "en"
                  }
                  return locale === "en"
                })
                .map(node => {
                  let html = node.body
                  if (node.__typename === "MdxBlogPost") {
                    html = node.parent.html
                  }
                  return Object.assign(
                    {},
                    {
                      title: node.title,
                      description: node.excerpt,
                      date: node.dateISO,
                      url: site.siteMetadata.siteUrl + node.slug,
                      guid: site.siteMetadata.siteUrl + node.slug,
                      custom_elements: [{ "content:encoded": html }],
                    }
                  )
                })
            },
            query: `
            {
              allBlogPost(limit: 25, sort: {fields: [date, slug], order: DESC}) {
                nodes {
                  id
                  __typename
                  excerpt
                  slug
                  title
                  body
                  dateISO: date
                  ... on MdxBlogPost {
                    id
                    parent {
                      ... on Mdx {
                        id
                        html
                        parent {
                          ... on File {
                            id
                            name
                            sourceInstanceName
                          }
                        }
                      }
                    }
                  }
                  ... on TweetPost {
                    id
                    parent {
                      __typename
                    }
                  }
                }
              }
            }
            `,
            output: "/rss.xml",
          },
          {
            serialize: ({ query: { site, allBlogPost } }) => {
              return allBlogPost.nodes
                .filter(node => {
                  let locale = "en"
                  if (node.__typename === "MdxBlogPost") {
                    locale =
                      node.parent.parent.sourceInstanceName ===
                      "content/posts-zh"
                        ? "zh"
                        : "en"
                  } else if (node.__typename === "TweetPost") {
                    locale =
                      node.parent.__typename === "TweetsZhJson" ? "zh" : "en"
                  }
                  return locale === "zh"
                })
                .map(node => {
                  let html = node.body
                  if (node.__typename === "MdxBlogPost") {
                    html = node.parent.html
                  }
                  return Object.assign(
                    {},
                    {
                      title: node.title,
                      description: node.excerpt,
                      date: node.dateISO,
                      url: site.siteMetadata.siteUrl + node.slug,
                      guid: site.siteMetadata.siteUrl + node.slug,
                      custom_elements: [{ "content:encoded": html }],
                    }
                  )
                })
            },
            query: `
            {
              allBlogPost(limit: 25, sort: {fields: [date, slug], order: DESC}) {
                nodes {
                  id
                  __typename
                  excerpt
                  slug
                  title
                  body
                  dateISO: date
                  ... on MdxBlogPost {
                    id
                    parent {
                      ... on Mdx {
                        id
                        html
                        parent {
                          ... on File {
                            id
                            name
                            sourceInstanceName
                          }
                        }
                      }
                    }
                  }
                  ... on TweetPost {
                    id
                    parent {
                      __typename
                    }
                  }
                }
              }
            }
            `,
            output: "/zh/rss.xml",
          },
        ],
      },
    },
  ],
}
