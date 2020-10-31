import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1>What a world.</h1>
      <p>
        <Link to="/about/">About</Link>
      </p>
      <p>
        <Link to="/contact/">Contact</Link>
      </p>
    </Layout>
  )
}