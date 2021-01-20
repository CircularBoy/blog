import React from 'react'
import { Post } from '../../store/postsReducer'
import PostPreview from './PostPreview'

interface IProps {
  posts: Array<Post>
}

const AllPosts: React.FC<IProps> = ({ posts }) => {
  return (
    <section>
      {posts.map((p: Post) => (
        <PostPreview key={p.id} id={p.id} title={p.title} body={p.body} />
      ))}
    </section>
  )
}

export default AllPosts
