import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom' 

class UsersList extends React.Component{
   constructor(){
       super()
       this.state = {
           users : []
       }
   }

   componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        const users=response.data
        this.setState({users})
    })
    .catch((err)=>{
        alert(err)
    })
}

   render(){
       return (
             <div>
                 <h2>Listing Users -{this.state.users.length}</h2>
                 <ul>
                     {
                         this.state.users.map(function(user){
                           return <li key ={user.id}> <Link to = {`/users/${user.id}`}> {user.name} </Link></li>

                         })
                     }
                 </ul>
             </div>
       )
   }
}
export default UsersList