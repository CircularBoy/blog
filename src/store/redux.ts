import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import postsReducer from './postsReducer'

const reducers = combineReducers({
  posts: postsReducer,
})

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
// const reduxDevTools =
//   // @ts-ignore
//   typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// const store = createStore(reducers, compose(applyMiddleware(thunk), reduxDevTools))
const store = createStore(reducers, compose(applyMiddleware(thunk)))

export default store
