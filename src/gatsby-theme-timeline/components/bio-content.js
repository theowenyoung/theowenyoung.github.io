import React, { Fragment } from "react"
import { Link } from "theme-ui"

/**
 * Shadow me to add your own bio content
 */

const BioContent = () => (
  <Fragment>
    Words by <Link href="/about">Owen Young</Link>.
    <br />
    Freelancer / Perfectionism / Workflow lover, Personal Finance Enthusiast{" "}
    <Link href="/now">What I’m doing now?</Link>
  </Fragment>
)

export default BioContent
