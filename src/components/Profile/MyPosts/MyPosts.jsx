import Post from '../Post/Post'
import React from 'react';
const MyPosts = (props) => {
debugger;
    
    const postElements =  props.posts.map(post => <Post postText={post} ></Post> )
    let postInputRef = React.createRef();

    let addPostCallBack = () =>{console.log(postInputRef.current.value)}

    return(

        
        <div>
            <div>
                New post
                <textarea ref={postInputRef}></textarea>
                <button onClick={addPostCallBack}>Add post</button>
            </div>

            <div>
                My posts
                {postElements}
            </div>
            
        </div>
    )
}

export default MyPosts;