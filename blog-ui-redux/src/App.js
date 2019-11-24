

import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import UsersList from './UsersList'
//import Contact from './Contact'
import Home from './Home'
import UserShow from './UserShow'
//import PostsList from './PostsList'
//import PostShow from './PostsShow'
import { connect } from 'react-redux'
//import { increment } from './actions/count'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import UsersListRedux from './UsersListRedux'
import UsersPostRedux from './UserShowRedux'
import PostListRedux from './PostListRedux'
import PostShowRedux from './PostShowRedux'

function App(props) {
  return (
    <BrowserRouter>
      <div>

        <Link to="/" >Home </Link> |
        <Link to="/users" >Users </Link> |
        <Link to="/posts" >Posts </Link>
        <Route path="/" component={Home} exact={true} />
        <Route path="/users" component={UsersListRedux} exact={true} />
        <Route path="/users/:id" component={UsersPostRedux} />
        <Route path="/posts" component={PostListRedux} exact={true} />
        <Route path="/posts/:id" component={PostShowRedux} />






      </div>
    </BrowserRouter>

  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    posts: state.posts
  }
}

//export default App;

export default connect(mapStateToProps)(App);

//<Route path="/posts" component={PostsList} exact={true} />
//
//<Route path="/contact" component={Contact} />