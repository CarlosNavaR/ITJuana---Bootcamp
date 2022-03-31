import React from 'react';
import './blog.css';

const NavBar = () => {
  return (
    <div className="blog-post-navbar">
      <div className="blog-post-brand">
        <a href="https://itjuana.com">
          <img
            alt="ITJuana logo"
            src="https://itjuana.com/wp-content/themes/itjuana/assets/images/svg-grid/itijuana-logo-color.svg"
            width={100}
          />
        </a>
      </div>

      <ul>
        <li className="blog-post-navbar">Join our team</li>
        <li className="blog-post-navbar">Contact us</li>
      </ul>
    </div>
  );
};

export default NavBar;
