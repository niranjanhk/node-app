import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' //handle async functions
import countReducer from '../reducers/count'
import randomReducer from '../reducers/count'

const configureStore = () => {
    const store = createStore(combineReducers({
        count: countReducer,
        randomnumber: randomReducer
    }))
    return store
}

export default configureStore