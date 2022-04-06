/** @jsx jsx */
import { Link as LinkUI, jsx, Themed } from "theme-ui"
import { withPrefix } from "gatsby"
import { LocalizedLink as Link } from "gatsby-theme-i18n"

/**
 * Shadow me to add your own bio content
 */

const ItemsTitle = ({ pageContext }) => {
  const { pageType, tag, basePath, currentPage } = pageContext
  if (pageType === `tag`) {
    return (
      <Themed.h4
        data-test="list-title"
        sx={{ fontWeight: `normal`, mb: `1.5rem` }}
      >
        <LinkUI sx={{ color: `text` }} as={Link} to={withPrefix(basePath)}>
          All posts
        </LinkUI>
        <span sx={{ color: `textMuted` }}> / </span>
        <span sx={{ color: `textMuted` }}>{tag}</span>
        {currentPage > 1 && <span sx={{ color: `textMuted` }}> / </span>}
        {currentPage > 1 && (
          <span sx={{ color: `textMuted` }}>page {currentPage}</span>
        )}
      </Themed.h4>
    )
  } else {
    return (
      <div>
        <Themed.blockquote>
          This blog has been migrated to{" "}
          <LinkUI href="https://www.owenyoung.com">www.owenyoung.com</LinkUI>,
          please use the new address to visit the latest content.
        </Themed.blockquote>
        <Themed.blockquote>
          这个博客已经迁移到{" "}
          <LinkUI href="https://www.owenyoung.com">www.owenyoung.com</LinkUI>
          了，请使用新的地址查看最新内容。
        </Themed.blockquote>
        <Themed.h4
          data-test="list-title"
          sx={{ fontWeight: `normal`, mb: `1.5rem` }}
        >
          Latest
          {currentPage > 1 && <span sx={{ color: `textMuted` }}> / </span>}
          {currentPage > 1 && (
            <span sx={{ color: `textMuted` }}>page {currentPage}</span>
          )}
        </Themed.h4>
      </div>
    )
  }
}

export default ItemsTitle
