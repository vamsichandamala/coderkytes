import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // const handleLinkClick = () => {
  //   if (open) {
  //     setOpen(false); 
  //   }
  // };
  return (
   
    <div className='navbar-main'>
      <nav>
        <div className='nav-bar-logo'>
          <i className="fa-solid fa-book-open" style={{ fontSize: '1.5rem' }}></i>
          <span style={{ fontSize: '1.5rem' }}>CODERKYTES</span>
        </div>

        <div className='menu-bar' onClick={() => setOpen(!open)}>
        <i className='bars' class="fa-solid fa-bars"></i>

        </div>

        <div className='nav-bar-links'>
          <ul className={open ? 'open' : ''}>
            <li onClick={() => setOpen(!open)} ><NavLink to="/" >Home</NavLink></li>
            <li onClick={() => setOpen(!open)}><NavLink to="/courses">Courses</NavLink></li>
            <li onClick={() => setOpen(!open)}><NavLink to="/certificates" >Certificates</NavLink></li>
            <li onClick={() => setOpen(!open)}><NavLink to="/contact" >Contact</NavLink></li>
            <li onClick={() => setOpen(!open)}><NavLink to="/register">Register</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
