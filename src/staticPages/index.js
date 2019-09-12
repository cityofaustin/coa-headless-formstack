import React from "react"
import { Link } from "gatsby"

const IndexPage = () => (
  <div>
    <span> This is the default gatsby home page </span>
    <Link to="/forms/">Go to the form home page</Link>
  </div>
)

export default IndexPage
