/** @jsx jsx */

import { jsx, Styled } from "theme-ui"
import Bio from "gatsby-theme-timeline/src/components/bio"
import Tags from "gatsby-theme-timeline/src/components/tags"
import Links from "gatsby-theme-timeline/src/components/links"
import Categories from "./categories"
import Projects from "./projects"
const Aside = ({ data, pageContext }) => {
  const { basePath } = pageContext
  const {
    site: { siteMetadata },
    tagsGroup: { group },
  } = data
  const { social } = siteMetadata
  return (
    <Styled.div data-test="aside" as="aside">
      <Styled.div>
        <Bio basePath={basePath}></Bio>
        <Tags basePath={basePath} group={group}></Tags>
        <Categories basePath={basePath}></Categories>
        <Projects basePath={basePath}></Projects>
        <Links siteMetadata={siteMetadata} links={social}></Links>
      </Styled.div>
    </Styled.div>
  )
}
export default Aside
