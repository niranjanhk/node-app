import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import configureStore from './store/configureStore'
import { startSetUsers } from './actions/users'
import { startSetPosts } from './actions/posts'
import { startSetComment } from './actions/comments'
//import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';

const store = configureStore()
console.log(store.getState())

store.subscribe(() => {
    console.log(store.getState())
})

//async action generator
store.dispatch(startSetUsers())
store.dispatch(startSetPosts())
store.dispatch(startSetComment())



const ele = (
    <Provider store={store}>
        <App />
    </Provider>
)




ReactDOM.render(ele, document.getElementById('root'))
