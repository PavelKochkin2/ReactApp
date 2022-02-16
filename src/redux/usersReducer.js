
const photoUrl = "https://2ch.hk/b/thumb/183040196/15369578426600s.jpg"
let initialState = {

    users: [
        { id: 1, photoUrl: photoUrl, followed: true, fullName: 'Pavel Kochkin', status: 'top boy', location: { city: "Mogilev", country: "Belarus" } },
        { id: 2, photoUrl: photoUrl, followed: false, fullName: 'Baby Bom', status: 'oh my gadbl', location: { city: "Kiev", country: "Ukraine" } },
        { id: 3, photoUrl: photoUrl, followed: true, fullName: 'Big Penis', status: 'I do not like', location: { city: "Moscow", country: "Russia" } }
    ]
};

export const usersReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {

        case toggleFollow: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
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