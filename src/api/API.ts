import axios from 'axios'
import { Post, PostData } from '../store/postsReducer'

const instance = axios.create({
  baseURL: 'https://simple-blog-api.crew.red/',
  headers: {
    post: {
      'Content-Type': 'application/json',
    },
  },
})

interface IResponse {
  status: number
}

interface IPosts extends IResponse {
  data: Array<Post>
}

interface IPost extends IResponse {
  data: Post
}

export const postsAPI = {
  getPosts() {
    return instance.get<IPosts>('posts').then((response) => {
      return {
        data: response.data,
        status: response.status,
      }
    })
  },
  getPost(postId: number, withcomment: boolean) {
    return instance.get<IResponse>(`posts/${postId}` + withcomment ?? '?_embed=comments')
  },
  createPost(post: PostData) {
    return instance.post<IPost>('posts', post).then((response) => {
      return {
        data: response.data,
        status: response.status,
      }
    })
  },
  editPosts(post: Post, postId: number) {
    return instance.put<IPost>(`posts/${postId}`, post)
  },
  deletePost(postId: number) {
    return instance.delete<IResponse>(`posts/${postId}`)
  },
}
