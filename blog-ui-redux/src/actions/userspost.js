import axios from 'axios'

export const setUPosts = (uposts) => {
    return {
        type: 'SET_UPOSTS',
        payload: uposts
    }
}



export const startGetUPosts = (id) => {
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response) => {
                const uposts = response.data
                //console.log(posts)
                dispatch(setUPosts(uposts))

            })
    }
}


