const commentInitialstate = []

export default (state = commentInitialstate, action) => {
    switch (action.type) {
        case 'SET_COMMENT': {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}


