const {
  createFilePath,
  createRemoteFileNode,
} = require(`gatsby-source-filesystem`)
const { urlResolve, createContentDigest } = require(`gatsby-core-utils`)
exports.createSchemaCustomization = ({ actions, schema }, themeOptions) => {
  const excerptLength = 140
  const { createTypes } = actions

  createTypes(
    schema.buildObjectType({
      name: `MdxBlogPage`,
      fields: {
        id: { type: `ID!` },
        title: {
          type: `String!`,
        },
        slug: {
          type: `String!`,
        },
        date: { type: `Date!`, extensions: { dateformat: {} } },
        tags: { type: `[String]!` },
        excerpt: {
          type: `String!`,
          args: {
            pruneLength: {
              type: `Int`,
              defaultValue: excerptLength,
            },
          },
          resolve: mdxResolverPassthrough(`excerpt`),
        },
        image: {
          type: `File`,
          resolve: async (source, args, context, info) => {
            if (source.image___NODE) {
              return context.nodeModel.getNodeById({ id: source.image___NODE })
            } else if (source.image) {
              return processRelativeImage(source, context, `image`)
            }
          },
        },
        imageAlt: {
          type: `String`,
        },
        imageCaptionText: {
          type: `String`,
        },
        imageCaptionLink: {
          type: `String`,
        },
        socialImage: {
          type: `File`,
          resolve: async (source, args, context, info) => {
            if (source.socialImage___NODE) {
              return context.nodeModel.getNodeById({
                id: source.socialImage___NODE,
              })
            } else if (source.socialImage) {
              return processRelativeImage(source, context, `socialImage`)
            }
          },
        },
        body: {
          type: `String!`,
          resolve: mdxResolverPassthrough(`body`),
        },
      },
      interfaces: [`Node`],
      extensions: {
        infer: false,
      },
    })
  )
}
exports.createResolvers = ({ createResolvers }) => {
  const tweetLocaleMap = {
    EnTweetsJson: "en",
    ZhTweetsJson: "zh",
  }
  const resolvers = {
    MdxBlogPage: {
      fields: {
        type: `Fields`,
      },
    },
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
exports.onCreateNode = async (
  { node, actions, getNode, createNodeId, store, cache },
  themeOptions
) => {
  const { createNode, createParentChildLink, createNodeField } = actions
  const contentPath = "content/pages"
  const basePath = "/"
  // Make sure it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return
  }

  // Create source field (according to contentPath)
  const fileNode = getNode(node.parent)
  const source = fileNode.sourceInstanceName

  if (node.internal.type === `Mdx` && source === contentPath) {
    let slug
    if (node.frontmatter.slug) {
      if (path.isAbsolute(node.frontmatter.slug)) {
        // absolute paths take precedence
        slug = node.frontmatter.slug
      } else {
        // otherwise a relative slug gets turned into a sub path
        slug = urlResolve(basePath, node.frontmatter.slug)
      }
    } else {
      // otherwise use the filepath function from gatsby-source-filesystem
      const filePath = createFilePath({
        node: fileNode,
        getNode,
        basePath: contentPath,
      })

      slug = urlResolve(basePath, filePath)
    }
    // normalize use of trailing slash
    slug = slug.replace(/\/*$/, `/`)

    const fieldData = {
      title: node.frontmatter.title,
      tags: node.frontmatter.tags || [],
      slug,
      date: node.frontmatter.date,
      image: node.frontmatter.image,
      imageAlt: node.frontmatter.imageAlt,
      imageCaptionText: node.frontmatter.imageCaptionText,
      imageCaptionLink: node.frontmatter.imageCaptionLink,
      socialImage: node.frontmatter.socialImage,
    }

    if (validURL(node.frontmatter.image)) {
      // create a file node for image URLs
      const remoteFileNode = await createRemoteFileNode({
        url: node.frontmatter.image,
        parentNodeId: node.id,
        createNode,
        createNodeId,
        cache,
        store,
      })
      // if the file was created, attach the new node to the parent node
      if (remoteFileNode) {
        fieldData.image___NODE = remoteFileNode.id
      }
    }

    if (validURL(node.frontmatter.socialImage)) {
      // create a file node for image URLs
      const remoteFileNode = await createRemoteFileNode({
        url: node.frontmatter.socialImage,
        parentNodeId: node.id,
        createNode,
        createNodeId,
        cache,
        store,
      })
      // if the file was created, attach the new node to the parent node
      if (remoteFileNode) {
        fieldData.socialImage___NODE = remoteFileNode.id
      }
    }

    const mdxBlogPostId = createNodeId(`${node.id} >>> MdxBlogPage`)
    await createNode({
      ...fieldData,
      // Required fields.
      id: mdxBlogPostId,
      parent: node.id,
      children: [],
      internal: {
        type: `MdxBlogPage`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the BlogPost interface`,
      },
    })
    const mdxNode = getNode(mdxBlogPostId)
    createParentChildLink({ parent: node, child: mdxNode })

    createNodeField({
      node: mdxNode,
      name: `basePath`,
      value: basePath,
    })
  }
}
exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { createPage } = actions
  const basePath = "/"
  const imageMaxWidth = 1024
  const imageMaxHeight = 512
  const postsPerPage = 25
  // These templates are simply data-fetching wrappers that import components
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

  // create limit >1000 detail page, cause blog-core limit 1000
  const detailsPageResult = await graphql(`
    {
      allMdxBlogPage {
        nodes {
          id
          slug
        }
      }
    }
  `)

  if (detailsPageResult.errors) {
    reporter.panic(detailsPageResult.errors)
  }

  // Create Posts and Post pages.
  const { allMdxBlogPage: allDetailBlogPost } = detailsPageResult.data
  const detailPosts = allDetailBlogPost.nodes
  const PostTemplate = require.resolve(`./src/templates/page-query`)
  // Create a page for each Post
  detailPosts.forEach((post, index) => {
    const { slug } = post
    createPage({
      path: slug,
      component: PostTemplate,
      context: {
        pageType: "page",
        id: post.id,
        maxWidth: imageMaxWidth,
      },
    })
  })
}
const mdxResolverPassthrough = fieldName => async (
  source,
  args,
  context,
  info
) => {
  const type = info.schema.getType(`Mdx`)
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  })
  const resolver = type.getFields()[fieldName].resolve
  const result = await resolver(mdxNode, args, context, {
    fieldName,
  })
  return result
}
function validURL(str) {
  try {
    new URL(str)
    return true
  } catch {
    return false
  }
}
