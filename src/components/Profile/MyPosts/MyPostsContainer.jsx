import React from 'react';
import { createAddPostAction } from '../../../redux/profileReducer'
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    debugger;
    let posts = props.store.getState().profileComponentData.posts;

    let addPost = (text) => {
        debugger;
        props.store.dispatch(createAddPostAction(text));
    }

    return (
        <MyPosts 
        addPost={addPost} 
        posts = {posts}
        />
    )
}

export default MyPostsContainer;