import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import logo from '../../logo.png';
import { FaFacebook, FaHome, FaInfo, FaPhone, FaSearch } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="navbar">
            <div className='navbar-heading'>
                <img src={logo} alt='#' className='navbar-logo' />
                <div className='social-icons-container'>
                    <FaFacebook className='social-icon' size={20}/>
                    <FaPhone className='social-icon' size={20}/>
                </div>

            </div>
            <div className='navbar-link'>
                <ul>

                    <Link to="/"><li><FaSearch  size={20} className='social-icon'/></li></Link>
                    <Link to="/"><li><FaHome  size={20} className='social-icon' /></li></Link>
                    <Link to="/aboutus"><li><FaInfo  size={20} className='social-icon' /></li></Link>
                    <Link to="/store"><li className='square-icon'>Store</li></Link>
                    <Link to="/cart"><li className='square-icon'>Rs</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Header