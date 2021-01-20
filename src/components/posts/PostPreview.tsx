import React from 'react'
import Link from 'next/link'

type Props = {
  id: number | string
  title: string
  body: string
}

const PostPreview: React.FC<Props> = ({ id, title, body }) => {
  return (
    <article>
      <Link href={'posts/' + id}>
        <a>
          <h1>{String(title)}</h1>
          <p>{String(body)}</p>
        </a>
      </Link>
    </article>
  )
}

export default PostPreview
