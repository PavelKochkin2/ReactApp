import * as axios from 'axios'
import userAvaMock from '../../assets/images/userAvaMock.png'
import css from './Users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger;
            props.getUsers(response.data.items);
        })
    }


    return (<div>
        {
            props.users.map(
                user => <div key={user.id}>
                    <span>
                        <div >
                            <img className={css.userPhoto} src={user.photos.small != null ? user.photos.small : userAvaMock} />
                        </div>
                        <div>
                            {user.followed ?
                                <button onClick={() => { props.toggleFollow(user.id) }}>Unfollow</button> :
                                <button onClick={() => { props.toggleFollow(user.id) }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {user.name}
                            </div>
                            <div>
                                {user.status}
                            </div>
                        </span>
                        {/* <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span> */}
                    </span>
                </div>
            )
        }
    </div>)
}

export default Users;