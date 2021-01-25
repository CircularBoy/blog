import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import postsReducer from './postsReducer'

const reducers = combineReducers({
  posts: postsReducer,
})

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

let store
if (typeof window !== 'undefined') {
  // @ts-ignore
  const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  store = createStore(reducers, compose(applyMiddleware(thunk), reduxDevTools))
} else {
  store = createStore(reducers, compose(applyMiddleware(thunk)))
}

export default store
