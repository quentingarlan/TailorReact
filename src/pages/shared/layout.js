import React from "react"
import Header from "./header"
import Footer from "./footer"
import { Helmet } from "react-helmet-async"
import "bootswatch/dist/lux/bootstrap.css"
import styles from "./layout.module.scss"

const Layout = ({ title, description, children }) => {
  return (
    <div suppressHydrationWarning>
      <Helmet>
        <title>
          {title ? "Ghana tailor " + title : "Ghana tailor website"}
        </title>
        <meta
          name="description"
          content={description || "Ghana tailor website"}
        />
      </Helmet>
      <Header />
      <main className={styles.divLayout}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
