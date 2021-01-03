import React from "react"
import SEO from "gatsby-theme-timeline/src/components/seo"

export default ({ pageContext, location, siteMetadata }) => {
  const { pageType, tag } = pageContext
  let lang = "en"
  let title = `Home`
  let description = ""
  if (pageType === `tag`) {
    title = tag
    description = `See all posts about ${tag} at ${siteMetadata.title}`
    if (tag === "zh") {
      lang = "zh"
    }
  }
  if (pageContext.pageLang) {
    lang = pageContext.pageLang
  }
  if (lang === "zh") {
    title = "首页"
  }
  return (
    <SEO
      lang={lang}
      description={description}
      title={title}
      pageType={pageType}
      location={location}
    />
  )
}
