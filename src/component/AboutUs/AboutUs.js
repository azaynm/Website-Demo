import React from 'react'
import './AboutUs.scss'
import about from './about.jpg';

const AboutUs = () => {
  return (
    <div>
    <img src={about} alt="#"/>
    <div className='about'>
        
        <p>We are dedicatd to build your dream PC by using quality components according to the cash in hand to fulfill the dreams fo our valued customers through proper customer support process.</p>
        <p>Founded in 2016 by Chamathka De Silva, Chama Computers has come a long way from its beginnings in his home. When Chamathka first started out, his passion for "quality and affordable tech products" drove him to start this so that Chama Computers can offer you latest products to your doorstep. We now serve customers all over Sri Lanka, and are thrilled that we're able to turn our passion into our own website.</p>
        <p>I hope you enjoy the products as much as I enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact me.</p>
    <p>Chamathka De Silva</p>
    <h1>Vision</h1>
    <p>“To be the pioneer in the era of custom PC builds”</p>
    <h1>Mission</h1>
    <p>to Inspire the people by “providing the customized PC experience in accordance with the requirements of gamers, students and workstation professionals.”</p>
    <h1>Legacy</h1>
    <p>Founded in 2016, the brainy team continue building customized PC and providing best sales support to the customers. We are ready to give best experience from start to finish and grow as industry veteran.</p>
    <h1>Going forward</h1>
    <p>We are providing an excellent life time customer service with the latest computer solutions to meet the requirements of the customers. We are ready to customized your dream PC with the assistance of our brainy and expert technical team. We will continue to made your dream PC with the outstanding quality at a reasonable price.</p>
    </div>
    </div>
  )
}

export default AboutUs