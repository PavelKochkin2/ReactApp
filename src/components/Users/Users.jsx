import * as axios from 'axios'
import userAvaMock from '../../assets/images/userAvaMock.png'
import css from './Users.module.css'
import React from 'react'

class Users extends React.Component {

    getUsers = () => {

        let haveNoUsers = this.props.users.length === 0;

        if (haveNoUsers) {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.getUsers(response.data.items);
                    this.props.setUsersTotalCount(response.data.totalCount)
                })
        }
    }

    componentDidMount() {
        this.getUsers();
    }

    onPageChanged(page) {
        debugger
        this.props.setCurrentPage(page);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.getUsers(response.data.items);
            })
    }


    render() {

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            if (pages.length < 10) {
                pages.push(i);
            }
        }

        return (
            <div>
                <div>
                    {pages.map(page => {
                        return <span key={page} onClick={() => this.onPageChanged(page)} className={this.props.currentPage === page ? css.selectedPage : ''}> {page} </span>
                    })}
                </div>

                {
                    this.props.users.map(
                        user => <div key={user.id}>
                            <span>
                                <div >
                                    <img className={css.userPhoto} src={user.photos.small != null ? user.photos.small : userAvaMock} />
                                </div>
                                <div>
                                    {user.followed ?
                                        <button onClick={() => { this.props.toggleFollow(user.id) }}>Unfollow</button> :
                                        <button onClick={() => { this.props.toggleFollow(user.id) }}>Follow</button>}

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
}

export default Users;