// /** @jsx jsx */
// import { Box, jsx, Styled, Link as LinkUI } from "theme-ui"
// import { useStaticQuery, graphql } from "gatsby"
// const Projects = () => {
//   const { site } = useStaticQuery(
//     graphql`
//       query {
//         site {
//           siteMetadata {
//             projects {
//               name
//               description
//               url
//             }
//           }
//         }
//       }
//     `
//   )
//   const links = site.siteMetadata.projects
//   return (
//     <Box data-test="projects-container">
//       <LinkUI href={"https://wiki.owenyoung.com/projects"} sx={{ color: "text" }}>
//         <Styled.h4 data-test="projects-title">Projects</Styled.h4>
//       </LinkUI>
//       <Styled.ul>
//         {links
//           ? links.map((link, i) => {
//               const attr = {}
//               if (link.external) {
//                 attr.target = `_blank`
//                 attr.rel = `noopener noreferrer`
//               }
//               return (
//                 <li key={`projects-${i}`} sx={{ mb: 2 }}>
//                   <LinkUI {...attr} href={link.url}>
//                     {link.name}
//                   </LinkUI>
//                   <div sx={{ fontSize: 0, color: "textMuted" }}>
//                     {link.description}
//                   </div>
//                 </li>
//               )
//             })
//           : null}
//       </Styled.ul>
//     </Box>
//   )
// }

// export default Projects
