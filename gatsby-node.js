exports.createResolvers = ({ createResolvers }) => {
  const localeMap = {
    "content/posts": "en",
    "content/posts-zh": "zh",
  }
  const tweetLocaleMap = {
    TweetsJson: "en",
    TweetsZhJson: "zh",
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
          const sourceInstanceName = fileNode.sourceInstanceName
          const locale = localeMap[sourceInstanceName]
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
    TweetPost: {
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
  { node, actions, createNodeId, getNode, store, cache },
  themeOptions
) => {}
