import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <nav>
      <Link href={'/'}>
        <a>Blog</a>
      </Link>
      <Link href={'/posts/new'}>
        <a>Create post</a>
      </Link>
      <Link href={'/'}>
        <a>News</a>
      </Link>
      <Link href={'/'}>
        <a>About</a>
      </Link>
    </nav>
  )
}

export default Navigation
