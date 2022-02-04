import MyPosts from './MyPosts/MyPosts.jsx'
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import css from './Profile.module.css'
const Profile = (props) => {
    debugger;
    return (
        <div>
            <div>
                avatar+description
            </div>
            <MyPostsContainer store={props.store}/>
            <img className={css.avatar} src="https://vetliva.ru/upload/resize_cache/iblock/582/1170_640_2ad00f77cb8d50abfaeeae09efd4a5122/5824e36662a84f1350fcc661fe0ef9ee.jpg" />
        </div>)
}

export default Profile;