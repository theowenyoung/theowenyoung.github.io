const { urlResolve } = require(`gatsby-core-utils`)

exports.createResolvers = ({ createResolvers }) => {
  const tweetLocaleMap = {
    EnTweetsJson: "en",
    ZhTweetsJson: "zh",
  }
  const resolvers = {
    MdxBlogPost: {
      tags: {
        resolve: (source, _, context) => {
          const parentNode = context.nodeModel.getNodeById({
            id: source.parent,
            type: "Mdx",
          })
          const fileNode = context.nodeModel.getNodeById({
            id: parentNode.parent,
            type: "File",
          })
          const relativePath = fileNode.relativePath
          const rootDirectory = relativePath.split("/")[0]
          const locale = rootDirectory
          const additionTags = []
          if (!source.tags.includes("post")) {
            additionTags.push("post")
          }
          if (locale) {
            if (!source.tags.includes(locale)) {
              additionTags.push(locale)
            }
          }
          return source.tags.concat(additionTags)
        },
      },
    },
    SocialMediaPost: {
      tags: {
        resolve: (source, _, context) => {
          const parentNode = context.nodeModel.getNodeById({
            id: source.parent,
          })
          const locale = tweetLocaleMap[parentNode.internal.type]
          const additionTags = []
          if (locale) {
            if (!source.tags.includes(locale)) {
              additionTags.push(locale)
            }
          }
          return source.tags.concat(additionTags)
        },
      },
    },
  }
  createResolvers(resolvers)
}

exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { createPage } = actions
  const basePath = "/"
  const imageMaxWidth = 1024
  const imageMaxHeight = 512
  const postsPerPage = 25
  // These templates are simply data-fetching wrappers that import components
  // const ItemTemplate = require.resolve(`./src/templates/post-query`)
  const ItemsTemplate = require.resolve(
    `gatsby-theme-timeline/src/templates/posts-query`
  )
  const tagsGraphql = `
  query ItemsCreatePageQuery($filter: BlogPostFilterInput) {
    tagsGroup: allBlogPost(
      sort: { fields: [date, slug], order: DESC }
      filter: $filter
    ) {
      group(field: tags) {
        fieldValue
        nodes {
          id
          slug
        }
      }
    }
  }
`
  const locales = ["en", "zh"]
  for (let i = 0; i < locales.length; i++) {
    const locale = locales[i]
    const postsFilter = {
      tags: {
        in: [locale],
      },
    }
    const result = await graphql(tagsGraphql, {
      filter: postsFilter,
    })

    if (result.errors) {
      reporter.panic(result.errors)
    }

    // Create locale Posts
    const {
      tagsGroup: { group },
    } = result.data
    // Make tag pages
    group.forEach(tag => {
      const tagPosts = tag.nodes
      const tagTotalPages = Math.ceil(tagPosts.length / postsPerPage)
      const tagTotal = tagPosts.length
      // create posts pages
      Array.from({ length: tagTotalPages }).forEach((_, i) => {
        createPage({
          path:
            i === 0
              ? urlResolve(`${basePath}`, locale)
              : urlResolve(`${basePath}`, `${locale}/page/${i + 1}`),
          component: ItemsTemplate,
          context: {
            pageLang: locale,
            basePath,
            pageType: `home`,
            tagsFilter: postsFilter,
            filter: postsFilter,
            limit: postsPerPage,
            skip: i * postsPerPage,
            total: tagTotal,
            totalPages: tagTotalPages,
            currentPage: i + 1,
            maxWidth: imageMaxWidth,
            maxHeight: imageMaxHeight,
          },
        })
      })
    })
  }
}
