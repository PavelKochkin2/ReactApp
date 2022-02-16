
const photoUrl = "https://2ch.hk/b/thumb/183040196/15369578426600s.jpg"

let initialState = {
    users: [
    ]
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case toggleFollow: {
            debugger
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        let followed = user.followed;
                        return { ...user, followed: !followed }
                    }
                    return user;
                })
            }

        }
        case getUsers: {
            return { ...state, users: [...state.users, ...action.users] }
        }
        default: return state
    }
}

const toggleFollow = 'TOGGLE_FOLLOW'
const getUsers = 'GET_USERS'

export const toggleFollowAC = (userId) => {
    return ({ type: toggleFollow, userId: userId })
}

export const getUsersAC = (users) => {
    return ({ type: getUsers, users: users })
}