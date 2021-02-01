/** @jsx jsx */
import { Box, jsx, Styled, Link as LinkUI } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
const Categories = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            categories {
              name
              url
            }
          }
        }
      }
    `
  )
  const links = site.siteMetadata.categories

  return (
    <Box data-test="categories-container">
      <Styled.h4 data-test="categories-title">Categories</Styled.h4>
      <Styled.ul>
        {links
          ? links.map((link, i) => {
              const attr = {}
              if (link.external) {
                attr.target = `_blank`
                attr.rel = `noopener noreferrer`
              }
              return (
                <li key={`categories-${i}`}>
                  <LinkUI {...attr} href={link.url}>
                    {link.name}
                  </LinkUI>
                </li>
              )
            })
          : null}
      </Styled.ul>
    </Box>
  )
}

export default Categories
