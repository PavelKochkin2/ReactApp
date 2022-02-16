let Users = (props) => {

    //props.getUsers();

    return (<div>
        {
            props.users.map(
                user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photoUrl} />
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
                                {user.fullName}
                            </div>
                            <div>
                                {user.status}
                            </div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                </div>
            )
        }
    </div>)
}

export default Users;