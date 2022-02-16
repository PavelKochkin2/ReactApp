import { connect } from "react-redux";
import Users from "./Users";
import { getUsersAC, toggleFollowAC } from '../../redux/usersReducer'

let mapStateToProps = (state) => {
    return {
        users: state.usersComponentData.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            debugger
            let action = toggleFollowAC(userId);
            dispatch(action);
        },
        getUsers: () => {
            let action = getUsersAC();
            dispatch(action);
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer