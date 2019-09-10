import React from "react"
import { Link } from "gatsby"

import Layout from "src/components/Base/layout"
import Image from "src/components/Base/image"
import SEO from "src/components/Base/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/forms/">Go to the form home page</Link>
  </Layout>
)

export default IndexPage
