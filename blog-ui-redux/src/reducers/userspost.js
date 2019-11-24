const upostsInitialState = []
export default (state = upostsInitialState, action) => {
    switch (action.type) {
        case 'SET_UPOSTS': {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}