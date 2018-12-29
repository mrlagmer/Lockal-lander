import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
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
        Imersrse yourself in the culture. <br />
        Learn Something new. <br />
        Grow.
      </h2>
      <p
        style={{
          alignSelf: 'center',
        }}
      >
        We're getting local guides together with anyone who wants to find a new
        experience. Whether you're traveling overseas or simply looking for
        something to do find out what's happening through lockal.
      </p>
      <form
        style={{
          marginTop: '25px',
        }}
      >
        <div class="field is-horizontal">
          <label class="field-label is-medium has-text-left">I am</label>
          <div class="control field-body">
            <div class="select is-medium">
              <select>
                <option>A Traveler</option>
                <option>An Expert</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              class="input is-medium"
              type="text"
              placeholder="Enter Name"
              style={{
                width: '80%',
              }}
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              class="input is-medium"
              type="email"
              placeholder="Email Address"
              style={{
                width: '80%',
              }}
            />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <button
              class="button is-link"
              style={{
                width: '80%',
              }}
            >
              Find out more
            </button>
          </div>
        </div>
      </form>
    </div>
  </Layout>
)

export default IndexPage
