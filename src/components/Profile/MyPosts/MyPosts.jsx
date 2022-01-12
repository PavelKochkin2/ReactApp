import Post from '../Post/Post'

const MyPosts = () => {
    return(
        <div>My posts
                <div>New post</div>
                <Post number={1}/>
                <Post number={2}/>
                <Post number={3}/>
        </div>
    )
}

export default MyPosts;