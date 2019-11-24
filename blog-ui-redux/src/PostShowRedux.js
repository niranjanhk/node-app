import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class PostShowRedux extends React.Component {


    render() {

        return (
            <div>
                <h2>{this.props.posts.title} </h2>
                <p>{this.props.posts.body}</p>
                <p><Link to={`/users/${this.props.users.id}`}> {this.props.users.name} </Link> </p>
                <h2> Listing Comments - {this.props.comments.length} </h2>
                <ul>
                    {this.props.comments.map(comment => {
                        return (
                            <li key={comment.id}>{comment.body} </li>
                        )
                    })}
                </ul>
            </div>

        )
    }

}


const mapStateToProps = (state, props) => {
    return {
        users: state.users,
        posts: state.posts.find(post => post.id == props.match.params.id),
        comments: state.comments.filter(comment => comment.postId == props.match.params.id)
    }
}
export default connect(mapStateToProps)(PostShowRedux)
