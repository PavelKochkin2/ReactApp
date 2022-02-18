import { Link } from 'react-router-dom';
import css from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={css.nav}>
      <div><Link to="/profile">Profile</Link></div>
      <div><Link to='/dialogs'>Messages</Link></div>
      <div><Link to='/users'>Users</Link></div>
      <div><a>News</a></div>
      <div><a>Music</a></div>
      <div><a>Settings</a></div>
    </nav>
  )
}

export default Navbar;