const postInitialState = []

export default (state = postInitialState, action) => {
    switch (action.type) {
        case 'SET_POSTS': {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}
