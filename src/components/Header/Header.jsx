import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { authProvider } from '../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(authProvider)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert("Sign-Out Successfully")
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">SignUp</Link>
                {
                    user ? <span className='user-info'>Welcome {user.email}<button className='btn-logout' onClick={handleLogOut}>Log-Out</button>
                    </span  > : <Link className='btn-logout2' to='/login'>Log-In</Link>
                }
            </div>
        </nav>
    );
};

export default Header;