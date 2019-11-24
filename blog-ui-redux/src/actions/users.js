import axios from 'axios'


//synchronous
export const setUsers = (users) => {
    return {
        type: 'SET_USERS',
        payload: users
    }
}


//asychronous
export const startSetUsers = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data
                dispatch(setUsers(users))
            })

    }
}

/*export const startSetUsersPosts = () => {
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(response => {
                const posts = response.data
                dispatch(setUsersPosts(posts))
            })
    }
}*/