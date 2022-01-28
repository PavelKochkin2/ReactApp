import Post from '../Post/Post'
import React from 'react';
const MyPosts = (props) => {

    const postElements = props.posts.map(post => <Post postText={post} ></Post>)
    let postInputRef = React.createRef();

    let addPost = () => {
        debugger;
        let text = postInputRef.current.value;

        props.addPost(text);
    }

    return (


        <div>
            <div>
                New post
                <textarea ref={postInputRef}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>

            <div>
                My posts
                {postElements}
            </div>

        </div>
    )
}

export default MyPosts;