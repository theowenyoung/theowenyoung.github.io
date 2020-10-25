const path = require(`path`)
const {
  createFilePath,
  createRemoteFileNode,
} = require(`gatsby-source-filesystem`)
const { urlResolve, createContentDigest, slash } = require(`gatsby-core-utils`)
// Create fields for post slugs and source
// This will change with schema customization with work
const basePath = "/"
const contentPath = "content/posts"
exports.onCreateNode = async ({
  node,
  actions,
  getNode,
  createNodeId,
  store,
  cache,
}) => {
  const { createNode, createParentChildLink } = actions

  // Make sure it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return
  }

  // Create source field (according to contentPath)
  const fileNode = getNode(node.parent)
  const source = fileNode.sourceInstanceName

  if (node.internal.type === `Mdx` && source === "story") {
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

    const mdxBlogPostId = createNodeId(`${node.id} >>> MdxBlogPost`)
    await createNode({
      ...fieldData,
      // Required fields.
      id: mdxBlogPostId,
      parent: node.id,
      children: [],
      internal: {
        type: `MdxBlogPost`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the BlogPost interface`,
      },
    })
    createParentChildLink({ parent: node, child: getNode(mdxBlogPostId) })
  }
}
function validURL(str) {
  try {
    new URL(str)
    return true
  } catch {
    return false
  }
}
