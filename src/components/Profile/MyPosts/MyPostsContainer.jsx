import { connect } from 'react-redux';
import { createAddPostAction } from '../../../redux/profileReducer'
import MyPosts from './MyPosts';


let addStateToProps = (state) => {
    return {
        posts: state.profileComponentData.posts
    }
}

let addCallbacksToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(createAddPostAction(text))
        }
    }
}

const MyPostsContainer = connect(addStateToProps, addCallbacksToProps)(MyPosts);

export default MyPostsContainer;