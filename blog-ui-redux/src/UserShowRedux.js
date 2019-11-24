import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
//import { startGetTodos, resetTodos } from './action/todos'
//import todos from './reducers/todos'
class UserShowRedux extends React.Component {


    render() {
        console.log(this.props)
        return (
            <div>
                <h2>User Show</h2>
                <form>
                    <table class="table table-hover" border="I">
                        <thead>
                            <tr >
                                <th scope="col">#</th>
                                <th scope="col">name</th>
                                <th scope="col">email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="table-primary" >
                                <td>{this.props.users.id}</td>
                                <td>{this.props.users.name}</td>
                                <td>{this.props.users.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </form>

                <h2>Posts written by user - {this.props.posts.length}</h2>
                <ul>
                    {
                        this.props.posts.map(post => {
                            return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                        })
                    }
                </ul>


            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        users: state.users.find(u => u.id == props.match.params.id),
        posts: state.posts.filter(post => post.userId == props.match.params.id)
    }
}

export default connect(mapStateToProps)(UserShowRedux)
//<p>{this.props.user.name}- {this.props.user.email}</p>
//AngelList