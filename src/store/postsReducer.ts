import { postsAPI } from '../api/API'

type State = {
  posts: Array<Post>
  isPostsFetching: boolean
  isPostCreating: boolean
}
export type Post = {
  id: number
  title: string
  body: string
  comments?: Array<Comment>
}
type Comment = {
  id: number
  postId: number
  body: string
}

const initState = {
  posts: [],
  isPostsFetching: false,
  isPostCreating: false,
}

export type PostData = {
  title: string
  body: string
}

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
type GetActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>
type Actions = GetActionsTypes<typeof actions>

const postsReducer = (state: State = initState, action: Actions): State => {
  switch (action.type) {
    case 'SET-POSTS':
      const obj = {
        ...state,
        posts: action.posts,
      }
      console.log(obj)
      return obj
    case 'IS-POSTS-FETCHING':
      return {
        ...state,
        isPostsFetching: action.isFetching,
      }
    case 'IS-POST-CREATING':
      return {
        ...state,
        isPostCreating: action.isFetching,
      }

    default:
      return state
  }
}

const actions = {
  //need @type
  setPosts: (posts: any) => ({ type: 'SET-POSTS', posts } as const),
  isPostsFetching: (isFetching: boolean) => ({ type: 'IS-POSTS-FETCHING', isFetching } as const),
  isPostCreating: (isFetching: boolean) => ({ type: 'IS-POST-CREATING', isFetching } as const),
  // createPost: (postData: PostData) => ({ type: 'CREATE-POST', postData } as const),
  editPost: (postData: PostData, postId: number) => ({ type: 'EDIT-POST', postData, postId } as const),
  deletePost: (postId: number) => ({ type: 'DELETE-POST', postId } as const),
}

export const requestPosts = () => async (dispatch) => {
  dispatch(actions.isPostsFetching(true))
  const { data, status } = await postsAPI.getPosts()
  if (status === 200) {
    dispatch(actions.setPosts(data))
  }
  dispatch(actions.isPostsFetching(false))
}
export const newPost = (postPayload: PostData) => async (dispatch) => {
  dispatch(actions.isPostCreating(true))
  const response = await postsAPI.createPost(postPayload)
  console.log(response)
  if (response.status === 200) {
    dispatch(requestPosts())
  }
  dispatch(actions.isPostCreating(false))
}

export default postsReducer
