import axios from 'axios'

export const setComments = (comment) => {
    return {
        type: 'SET_COMMENT',
        payload: comment

    }

}

export const startSetComment = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((response) => {
                const comments = response.data
                dispatch(setComments(comments))
            })
    }

}