import Post from '../Post/Post'

const MyPosts = (props) => {
debugger;
    
    const postElements =  props.data.posts.map(post => <Post postText={post}></Post> )

    return(
        <div>My posts
                {postElements}
        </div>
    )
}

export default MyPosts;