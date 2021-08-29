/** @jsx jsx */

import { jsx, Themed } from "theme-ui"
import Bio from "gatsby-theme-timeline/src/components/bio"
import Tags from "gatsby-theme-timeline/src/components/tags"
import Links from "gatsby-theme-timeline/src/components/links"
import Categories from "./categories"
const Aside = ({ data, pageContext }) => {
  const { basePath } = pageContext
  const {
    site: { siteMetadata },
    tagsGroup: { group },
  } = data
  const { social } = siteMetadata
  return (
    <Themed data-test="aside" as="aside">
      <Themed>
        <Bio basePath={basePath} siteMetadata={siteMetadata}></Bio>
        <Tags basePath={basePath} group={group}></Tags>
        <Categories basePath={basePath}></Categories>
        <Links siteMetadata={siteMetadata} links={social}></Links>
      </Themed>
    </Themed>
  )
}
export default Aside
