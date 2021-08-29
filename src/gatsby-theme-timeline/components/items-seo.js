import React from "react"
import Seo from "gatsby-theme-timeline/src/components/seo"

const ItemsSeo = ({ pageContext, location, siteMetadata }) => {
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
    <Seo
      siteMetadata={siteMetadata}
      lang={lang}
      description={description}
      title={title}
      pageType={pageType}
      location={location}
    />
  )
}
export default ItemsSeo
