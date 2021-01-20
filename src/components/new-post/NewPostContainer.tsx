import React, { useEffect, useState } from 'react'
import PostForm from '../forms/PostForm'
import { AppStateType } from '../../store/redux'
import { connect } from 'react-redux'
import { newPost, Post, PostData } from '../../store/postsReducer'
import { useRouter } from 'next/router'
import AllPosts from '../posts/AllPosts'
import PostsContainer from '../posts/PostsContainer'

type State = {
  posts: Array<Post>
}

type Dispatch = {
  newPost: (postPayload: PostData) => void
}

const NewPostContainer: React.FC<State & Dispatch> = ({ newPost, posts }) => {
  const [isMount, setIsMount] = useState(false)
  //redux store didnt update after dispatch posts to state ;
  useEffect(() => {
    if (isMount) {
      const lastPostId = posts[posts.length - 1].id
      useRouter().push('posts/' + lastPostId)
    }
    console.log(posts)
    setIsMount(true)
  }, [posts])
  return (
    <div>
      <PostForm onSubmit={newPost} submitText={'Create post'} />
    </div>
  )
}

const mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.posts.posts,
  }
}
export default connect<State, Dispatch, {}, AppStateType>(mapStateToProps, { newPost })(NewPostContainer)
