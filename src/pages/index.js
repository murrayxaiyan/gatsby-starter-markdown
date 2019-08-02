import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <div align="center">
        <br/>
          <p style={{color: "cornflowerblue", fontSize: 50, fontWeight: 'bold'}}>
            Masde2
          </p>
          <h2>Areas de conocimiento</h2>
          <br/>
          <Link to="/blog">
            <Button type="primary" size="large" style={{marginRight: 10}}>Docs</Button>
          </Link>
          <Button type="primary" size="large" href="https://dev.azure.com/DevTrifenix/_git/masde2-test">Github</Button>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage