
const photoUrl = "https://2ch.hk/b/thumb/183040196/15369578426600s.jpg"

let initialState = {
    users: [
    ],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 2
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case toggleFollow: {
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
        case setCurrentPage: {
            return { ...state, currentPage: action.page }
        }
        default: return state
    }
}



export const toggleFollowAC = (userId) => {
    return ({ type: toggleFollow, userId: userId })
}

export const getUsersAC = (users) => {
    return ({ type: getUsers, users: users })
}

export const setCurrentPageAC = (page) => {
    return ({ type: setCurrentPage, page })
}


const toggleFollow = 'TOGGLE_FOLLOW'
const getUsers = 'GET_USERS'
const setCurrentPage = 'SET_CURRENT_PAGE'