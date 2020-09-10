/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Header from "../header/header"
import Footer from '../footer/footer'
import "./layout.scss"

const Layout = ({ children }) => {

  return (
    <React.Fragment>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
