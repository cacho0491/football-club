import React from "react"

import Layout from "../components/Layout/Layout"
import appStyles from "../styles/styles.module.scss"
import Welcome from "../components/Welcome/Welcome"
import About from "../components/About/About"
import Services from "../components/Services/Services"

const Home = () => {
  return (
    <Layout>
      <div className={appStyles.main}>
        <Welcome />
        <About />
        <Services />
      </div>
    </Layout>
  )
}

export default Home
