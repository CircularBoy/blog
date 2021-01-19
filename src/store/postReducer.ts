const initState = {
  posts: [
    { id: 1, title: 'Some 1 title', body: ' Some 1 body' },
    { id: 2, title: 'Some 2 title', body: ' Some 2 body' },
    { id: 3, title: 'Some j3 title', body: ' Some 3 body' },
  ],
}

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
type GetActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>
type Actions = GetActionsTypes<typeof actions>

type State = typeof initState
function postsReducer(state: State = initState, action: Actions): State {
  switch (action.type) {
    case 'CREATE-POST':
      const posts = state.posts
      const newPostId = posts[posts.length].id + 1
      const post = { id: newPostId, ...action.postData }
      return {
        posts: [...state.posts, post],
      }
  }
}

type PostData = {
  title: string
  body: string
}

const actions = {
  createPost: (postData: PostData) => ({ type: 'CREATE-POST', postData } as const),
  editPost: (postData: PostData, postId: number) => ({ type: 'EDIT-POST', postData, postId } as const),
  deletePost: (postId: number) => ({ type: 'DELETE-POST', postId } as const),
}

export default postsReducer
