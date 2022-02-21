
let initialState = {
    users: [
    ],
    pageSize: 5,
    totalUsersCount: 0,
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
            return { ...state, users: action.users }
        }
        case setCurrentPage: {
            return { ...state, currentPage: action.page }
        }
        case setUsersTotalCount:{
            return{...state, totalUsersCount: action.count}
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
export const setUsersTotalCountAC=(count)=>{
    return({type: setUsersTotalCount, count })
}

const toggleFollow = 'TOGGLE_FOLLOW'
const getUsers = 'GET_USERS'
const setCurrentPage = 'SET_CURRENT_PAGE'
const setUsersTotalCount = 'SET_USERS_TOTAL_COUNT'