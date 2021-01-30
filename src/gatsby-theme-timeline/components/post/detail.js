/** @jsx jsx */
import { MDXRenderer } from "gatsby-plugin-mdx"
import Hero from "gatsby-theme-timeline/src/components/post/hero"
import Title from "gatsby-theme-timeline/src/components/post/detail-title"
import PostDate from "gatsby-theme-timeline/src/components/post/detail-date"
import { jsx } from "theme-ui"

const Detail = ({ item }) => {
  const post = item
  return (
    <article>
      <header>
        <PostDate>{post.date}</PostDate>
        <Hero post={post} />
        <Title sx={{ mb: 4, mt: 3 }}>{post.title}</Title>
      </header>
      <section
        sx={{
          fontSize: `1.125rem`,
          svg: {
            lineHeight: "1.2",
          },
          img: {
            maxWidth: `full`,
            margin: `0 auto`,
            display: `block`,
            pb: 4,
          },
        }}
      >
        <MDXRenderer>{post.body}</MDXRenderer>
      </section>
    </article>
  )
}

export default Detail
