const usersInitialState = []

const userReducer = (state = usersInitialState, action) => {
    switch (action.type) {
        case 'SET_USERS': {
            return [...action.payload]
        }

        case 'SET_USERS_POST': {
            return [...action.payload]
        }

        default: {
            return [...state]
        }
    }
}

export default userReducer