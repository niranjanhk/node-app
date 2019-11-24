import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class UsersListRedux extends React.Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row justify-content-md-center">
                    <div class="col-sm">
                        <div>
                            <h2>Listing Users -{this.props.users.length}</h2>
                            <ul class="list-group">
                                {
                                    this.props.users.map(u => {
                                        return (
                                            <li class="list-group-item list-group-item-secondary" key={u.id}><Link to={`/users/${u.id}`}>{u.name}</Link></li>
                                        )
                                    })
                                }

                            </ul>

                            <br />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
export default connect(mapStateToProps)(UsersListRedux)

/*<ul class="list-group">
  <li class="list-group-item active">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>*/