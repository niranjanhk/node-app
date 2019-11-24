import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PostsListRedux extends React.Component {
    render() {
        return (
            <div>
                <h2>Listing Posts -{this.props.posts.length}</h2>
                {
                    this.props.posts.map((post) => {
                        return (
                            <div key={post.id}>
                                <h2><Link to={`/posts/${post.id}`}>{post.title} </Link></h2>
                                <p>{post.body}</p>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(PostsListRedux)
