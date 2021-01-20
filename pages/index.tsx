import Head from 'next/head'
import React from 'react'
import Layout from '../src/components/Layout'
import PostsContainer from '../src/components/posts/PostsContainer'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Blog Next js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>My Posts</h1>
      <PostsContainer />
    </Layout>
  )
}
