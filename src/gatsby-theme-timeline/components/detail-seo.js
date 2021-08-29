import React from "react"
import SEO from "gatsby-theme-timeline/src/components/seo"

export default ({ item, location, siteMetadata }) => {
  let lang = "en"
  if (location && location.pathname.startsWith("/zh/")) {
    lang = "zh"
  }
  if (item && item.tags && item.tags.includes("zh")) {
    lang = "zh"
  }

  return (
    <SEO
      siteMetadata={siteMetadata}
      lang={lang}
      title={item.title}
      description={item.excerpt}
      location={location}
      imageSource={
        item.socialImage
          ? item.socialImage?.childImageSharp?.fluid.src
          : item.image?.childImageSharp?.fluid.src
      }
      imageAlt={item.imageAlt}
      pageType="detail"
      item={item}
    />
  )
}
