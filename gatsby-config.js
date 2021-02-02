/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const _ = require("lodash")
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Owen Young's Story`,
    siteUrl: `https://blog.owenyoung.com`,
    author: "Owen Young",
    description: "All my stories are here",
    keywords: ["Owen", "Owen Young", "Blog", "Story"],
    telegram: "@theowenyoung",
    menuLinks: [
      {
        name: "仅显示中文",
        url: "/zh",
      },
      {
        name: "Only English",
        url: "/en",
      },
    ],
    projects: [
      {
        name: "Actionsflow",
        url: "https://github.com/actionsflow/actionsflow",
        description:
          "free IFTTT/Zapier alternative for developers based on Github Actions",
      },
      {
        name: "Buzzing",
        url: "https://www.buzzing.cc/",
        description: "See hot discussions in your native language",
      },
      {
        name: "Gatsby Theme Timeline",
        url: "https://github.com/theowenyoung/gatsby-theme-timeline",
        description:
          "show your all posts, tweets, instagram posts etc into one blog",
      },
    ],
    categories: [
      {
        name: "Post",
        url: "/tags/post",
      },
      {
        name: "Tweet",
        url: "/tags/tweet",
      },
      {
        name: "Instagram",
        url: "/tags/instagram",
      },
    ],
    social: [
      {
        name: "About",
        url: "/about",
      },
      {
        name: "Now",
        url: "/now",
      },
      {
        name: "Projects",
        url: "/projects",
      },
      {
        name: "Github @theowenyoung",
        url: "https://github.com/theowenyoung",
      },

      {
        name: "Twitter @TheOwenYoung",
        url: "https://twitter.com/TheOwenYoung",
      },
      {
        name: "中文Twitter @OwenYoung_zh",
        url: "https://twitter.com/OwenYoung_zh",
      },
      {
        name: "Instagram @iamowenyoung",
        url: "https://www.instagram.com/iamowenyoung/",
      },
      {
        name: "RSS",
        url: "/rss.xml",
      },
      {
        name: "English RSS",
        url: "/en/rss.xml",
      },

      {
        name: "中文RSS",
        url: "/zh/rss.xml",
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content/pages`,
        path: `${__dirname}/content/pages/`,
      },
    },

    {
      resolve: `@theowenyoung/gatsby-source-git`,
      options: {
        name: `content/posts`,
        remote: `https://github.com/theowenyoung/story.git`,
        branch: `main`,
        // Only import the docs folder from a codebase.
        patterns: ["en/**", "assets/**", "zh/**"],
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: ({ node }) => {
          const directorys = node.relativeDirectory.split(`/`)
          const locale = directorys[0]
          const rootDirectoryName = directorys[1]
          return _.upperFirst(
            _.camelCase(`${locale} ${rootDirectoryName} Json`)
          )
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
          {
            resolve: "gatsby-remark-mermaid",
            options: {
              viewport: {
                width: 768,
                height: 800,
              },
            },
          },
        ],
        remarkPlugins: [
          require(`remark-slug`),
          require(`remark-emoji`),
          require(`remark-toc`),
        ],
      },
    },
    {
      resolve: `gatsby-theme-timeline`,
      options: {
        mdxOtherwiseConfigured: true,
        shouldTransformJson: false,
        tweetTypeName: ["EnTweetsJson", "ZhTweetsJson"],
        instagramTypeName: ["EnInstagramJson", "ZhInstagramJson"],
        utterances: {
          repo: "theowenyoung/story",
          label: "comment",
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Owen Young's Story`,
        short_name: `Owen`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#FF4500`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: ["", "en", "zh"].map(locale => {
          return {
            serialize: ({ query: { site, allBlogPost } }) => {
              return allBlogPost.nodes
                .filter(node => {
                  if (locale === "") {
                    return true
                  } else {
                    return node.tags.includes(locale)
                  }
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
                  tags
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
                  ... on SocialMediaPost {
                    id
                    parent {
                      __typename
                    }
                  }
                }
              }
            }
            `,
            output: `/${locale ? locale + "/" : ""}rss.xml`,
          }
        }),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-FS0E2RE694", // Google Analytics / GA
        ],
      },
    },
  ],
}
