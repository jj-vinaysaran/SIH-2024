import React from 'react'
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog, faBox, faBell, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='navbg'>
          <div className='navBar'>
            <Link to="/home">
                <FontAwesomeIcon icon={faHome} /> Home
            </Link>
            <Link to="/settings">
                <FontAwesomeIcon icon={faCog} /> Settings
            </Link>
            <Link to="/orders">
                <FontAwesomeIcon icon={faBox} /> Orders
            </Link>
            <Link to="/notifications">
                <FontAwesomeIcon icon={faBell} /> Notifications
            </Link>
            <Link to="/profile">
                <FontAwesomeIcon icon={faUser} /> Profile
            </Link>
            <Link to="/logout">
                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </Link>  
          </div>
          <div className='orange-strike'></div>
        </div>
      );  
}

export default Navbar