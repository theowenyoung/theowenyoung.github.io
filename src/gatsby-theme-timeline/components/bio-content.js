import React, { Fragment } from "react"
import { Link } from "theme-ui"

/**
 * Shadow me to add your own bio content
 */

const BioContent = () => (
  <Fragment>
    Words by <Link href="https://wiki.owenyoung.com/about/">Owen Young</Link>.
    <br />
    Freelancer / Perfectionism / Workflow lover, Personal Finance Enthusiast{" "}
    <Link href="https://wiki.owenyoung.com/">Wiki</Link>&nbsp;/&nbsp;
    <Link href="https://wiki.owenyoung.com/now/">What I’m doing now?</Link>
  </Fragment>
)

export default BioContent
