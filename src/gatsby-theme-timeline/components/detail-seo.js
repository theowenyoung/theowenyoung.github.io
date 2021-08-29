import React from "react"
import Seo from "gatsby-theme-timeline/src/components/seo"
import { getSrc } from "gatsby-plugin-image"
const DetailSeo = ({ item, location, siteMetadata }) => {
  let lang = "en"
  if (location && location.pathname.startsWith("/zh/")) {
    lang = "zh"
  }
  if (item && item.tags && item.tags.includes("zh")) {
    lang = "zh"
  }

  return (
    <Seo
      siteMetadata={siteMetadata}
      lang={lang}
      title={item.title}
      description={item.excerpt}
      location={location}
      imageSource={
        item.socialImage
          ? getSrc(item.socialImage)
          : item.image
          ? getSrc(item.image)
          : item.imageRemote
      }
      imageAlt={item.imageAlt}
      pageType="detail"
      item={item}
    />
  )
}
export default DetailSeo
