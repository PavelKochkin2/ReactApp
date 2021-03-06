import React from 'react';
import Post from '../Post/Post'

const MyPosts = (props) => {
    let postInputRef = React.createRef();

    let onAddPost = (event)=>{
        ;
        let text = postInputRef.current.value;
        props.addPost(text);
        postInputRef.current.value = '';
    }
    const postElements = props.posts.map(post => <Post postText={post} ></Post>)

    return (
        <div>
            <div>
                New post
                <textarea ref={postInputRef}></textarea>
                <button onClick={onAddPost}>Add post</button>
            </div>

            <div>
                My posts
                {postElements}
            </div>

        </div>
    )
}

export default MyPosts;