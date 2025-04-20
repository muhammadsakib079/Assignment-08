import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    `relative after:content-[""] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[3px] after:transition-transform after:duration-300 after:origin-left ${
      isActive
        ? 'font-semibold text-green-900 after:bg-green-900 after:scale-x-100'
        : 'after:bg-green-500 after:scale-x-0'
    }`;

  return (
    <div className="navbar shadow-sm px-42 py-6 mulish">
      <div className="navbar-start">
        <div className="flex items-center gap-3">
          <img src="https://i.ibb.co.com/zHb2BVgB/logo.png" alt="Law.CF_Logo" />
          <h3 className="plus-jakarta text-3xl font-bold">Law.CF</h3>
        </div>
      </div>

      <div className="navbar-center">
        <ul className="flex gap-10 px-1 text-xl">
          <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/bookings" className={navLinkClass}>My Bookings</NavLink></li>
          <li><NavLink to="/blogs" className={navLinkClass}>Blogs</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink></li>
        </ul>
      </div>

      <div className="navbar-end">
        <NavLink to="/contact">
          <button className="contact">Contact Now</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
