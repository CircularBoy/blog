import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../src/components/Layout'
import Head from 'next/head'

const Post = () => {
  const router = useRouter()
  return (
    <Layout>
      <Head>
        <title>{router.query.postId}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Create new post</h1>
    </Layout>
  )
}

export default Post
