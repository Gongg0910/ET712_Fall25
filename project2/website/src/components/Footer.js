import React from 'react';
import '../App.css'; 

import facebook from '../images/social/facebook.png'
import instagram from '../images/social/instagram.png'
import tik_tok from '../images/social/tik_tok.png'
import twitter_x from '../images/social/twitter_X.png'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">

        {/* Navigation Links */}
        <div className="footer links">
          <h3>Explore</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer contact">
          <h3>Contact Us</h3>
          <p>Email: gonzaloguerra@gmail.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 W 45th St, Apt 4B New York, NY 10036, USA</p>
        </div>

        {/* Social Media Icons */}
        <div className="footer-icon footer">
          <h3>Connect</h3>
          <a href="https://www.facebook.com/"><img src={facebook} className="social-icon"></img></a>
          <a href="https://www.instagram.com/"><img src={instagram} className="social-icon"></img></a>
          <a href="https://www.tiktok.com/en/"><img src={tik_tok} className="social-icon"></img></a>
          <a href="https://x.com/"><img src={twitter_x} className="social-icon"></img></a>
        </div>
        
        {/* Email and subcribe */}
        <div className="footer news">
          <h3>Stay Updated</h3>
          <p>Sign up for exclusive offers and news!</p>
          <form className='final-gap'>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        <p>2025, Gonzalo Guerra. All rights reserved and this is for educational.</p>
      </div>

    </footer>
  );
};
export default Footer;
