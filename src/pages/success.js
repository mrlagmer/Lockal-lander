import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SuccessPage = () => (
  <Layout>
    <SEO title="Success" keywords={['contact']} />
    <div
      class="container flexed"
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        margin: '20px',
        borderRadius: '5px',
      }}
    >
      <h1
        style={{
          marginBottom: '25px',
        }}
        class="title is-1 header-name"
      >
        Lockal.ly
      </h1>
      <h2
        style={{
          marginBottom: '25px',
          color: '#0e5d99',
        }}
        class="subtitle is-3"
      >
        Thank you <br />
        We will be in contact soon. <br />
      </h2>
    </div>
  </Layout>
)

export default SuccessPage
