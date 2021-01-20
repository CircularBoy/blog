import React, { useEffect } from 'react'
import AllPosts from './AllPosts'
import { connect } from 'react-redux'
import { AppStateType } from '../../store/redux'
import { Post, requestPosts } from '../../store/postsReducer'

type State = {
  posts: Array<Post>
}
type Dispatch = {
  requestPosts: () => void
}

// class PostsContainer extends React.Component<State & Dispatch> {
//   componentDidMount() {
//     this.props.requestPosts()
//     console.log(this.props.posts)
//   }
//   render(): React.ReactNode {
//     return <AllPosts posts={this.props.posts} />
//   }
// }

const PostsContainer: React.FC<State & Dispatch> = ({ posts, requestPosts }) => {
  useEffect(() => {
    requestPosts()
  }, [])
  return <AllPosts posts={posts} />
}

const mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.posts.posts,
  }
}

export default connect<State, Dispatch, {}, AppStateType>(mapStateToProps, { requestPosts })(PostsContainer)
