import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' //handle async functions

import userReducers from '../reducers/users'
import postsReducers from '../reducers/posts'
import commentsReducers from '../reducers/comments'
const configureStore = () => {
    const store = createStore(combineReducers({
        users: userReducers,
        posts: postsReducers,
        comments: commentsReducers


    }), applyMiddleware(thunk))
    return store
}

export default configureStore