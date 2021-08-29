import { graphql } from "gatsby"
import PostPage from "gatsby-theme-timeline/src/components/detail-page"

export default PostPage

// export const query = graphql`
//   query($id: String!, $maxWidth: Int) {
//     site {
//       siteMetadata {
//         title
//         description
//         social {
//           name
//           url
//           external
//           prefetch
//         }
//         menuLinks {
//           name
//           url
//           external
//           prefetch
//         }
//       }
//     }
//     blogPost: mdxBlogPage(id: { eq: $id }) {
//       id
//       excerpt
//       body
//       slug
//       title
//       tags
//       date(formatString: "MMMM DD, YYYY")
//       dateISO: date
//       datetime: date(formatString: "YYYY-MM-DD HH:mm")
//       image {
//         childImageSharp {
//           fluid(maxWidth: $maxWidth) {
//             ...GatsbyImageSharpFluid
//             src
//           }
//         }
//       }
//       imageAlt
//       socialImage {
//         childImageSharp {
//           fluid {
//             ...GatsbyImageSharpFluid
//             src
//           }
//         }
//       }
//       fields {
//         basePath
//       }
//     }
//   }
// `
