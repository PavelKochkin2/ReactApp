import { connect } from "react-redux";
import Users from "./Users";
import { getUsersAC, toggleFollowAC, setCurrentPageAC, setUsersTotalCountAC } from '../../redux/usersReducer'

let mapStateToProps = (state) => {
    return {
        users: state.usersComponentData.users,
        pageSize: state.usersComponentData.pageSize,
        totalUsersCount: state.usersComponentData.totalUsersCount,
        currentPage: state.usersComponentData.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        toggleFollow: (userId) => {
            let action = toggleFollowAC(userId);
            dispatch(action);
        },
        getUsers: (users) => {
            let action = getUsersAC(users);
            dispatch(action);
        },
        setCurrentPage: (page) => {
            let action = setCurrentPageAC(page);
            dispatch(action);
        },
        setUsersTotalCount: (count) => {
            let action = setUsersTotalCountAC(count);
            dispatch(action)
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer