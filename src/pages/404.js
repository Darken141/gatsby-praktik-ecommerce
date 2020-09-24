import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Stránka nebola najdená</h1>
    <p>Vypada to že ste našli niečo, čo neexistuje... to je smola.</p>
  </Layout>
)

export default NotFoundPage
