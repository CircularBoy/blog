import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://simple-blog-api.crew.red/',
})

type Post = {
  title: string
  body: string
}

// type PostResponse = {
//   data: Array<Post>
// }

export const postAPI = {
  getPosts() {
    return instance.get<any>('posts').then((response) => {
      return response.data
    })
  },
  getPost(postId: number, withcomment: boolean) {
    return instance.get<any>(`posts/${postId}` + withcomment ?? '?_embed=comments')
  },
  createPost(post: Post) {
    return instance.post<any>('posts', { post })
  },
  editPosts(post: Post, postId: number) {
    return instance.put<any>(`posts/${postId}`, { post })
  },
  deletePost(postId: number) {
    return instance.delete<any>(`posts/$postId`)
  },
}
