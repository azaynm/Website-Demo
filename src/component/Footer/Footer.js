import React from 'react'
import './Footer.scss'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-upper'>
                <div className='footer-upper-col1'>
                    <h3>ABOUT</h3>
                    <div>Your number one source for all things tech. We're dedicated to giving you the very best of computer parts, with a focus on quality, price, brand.</div>
                </div>
                <div className='footer-upper-col2'>
                    <h3>CATEGORIES</h3>
                    <Link to="#"><div>Processors</div></Link>
                    <Link to="#"><div>MotherBoards</div></Link>
                    <Link to="#"><div>Graphic Cards</div></Link>
                    <Link to="#"><div>Memory</div></Link>
                    <Link to="#"><div>Storage</div></Link>
                </div>
                <div className='footer-upper-col3'>
                    <div className='footer-upper-col3-row1'>
                        <h3>QUICK LINKS</h3>
                        <Link to="/"><div>Home</div></Link>
                        <Link to="/aboutus"><div>About Us</div></Link>
                    </div>
                    
                    <div className='footer-upper-col3-row2'>
                        <h3>CONTACT US</h3>
                        <Link to="#"><div>0777 22 33 63</div></Link>
                        <Link to="#"><div>admin@chamacomputers.lk</div></Link>
                    </div>
                </div>
            </div>
            <div className='footer-down'>
                <div className='footer-down-col1'>Copyright© 2022 All Rights Reserved by <Link to="/">ChamaComputers</Link></div>
                <div className='footer-down-col2'>
                <FaFacebook className='social-icon' size={30}  id='fb'/>
                <FaInstagram className='social-icon' size={30}  id='insta'/>
                <FaYoutube className='social-icon' size={30}  id='youtube'/>
                </div>
            </div>
        </div>
    )
}

export default Footer