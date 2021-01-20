import React from 'react'
import Layout from '../../src/components/Layout'
import Head from 'next/head'
import NewPostContainer from '../../src/components/new-post/NewPostContainer'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>New post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Create new post</h1>
      <NewPostContainer />
    </Layout>
  )
}
