import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinkClass = ({ isActive }) =>
    `relative after:content-[""] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[3px] after:transition-transform after:duration-300 after:origin-left ${
      isActive
        ? 'font-semibold text-green-900 after:bg-green-900 after:scale-x-100'
        : 'after:bg-green-500 after:scale-x-0'
    }`;

  return (
    <nav className="navbar shadow-sm px-4 py-6 mulish">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo section */}
        <div className="navbar-start flex items-center gap-3">
          <img src="https://i.ibb.co.com/zHb2BVgB/logo.png" alt="Law.CF_Logo" className="h-10" />
          <h3 className="plus-jakarta text-3xl font-bold hidden sm:block">Law.CF</h3>
        </div>

        {/* Desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-10 px-1 text-xl">
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/bookings" className={navLinkClass}>My Bookings</NavLink></li>
            <li><NavLink to="/blogs" className={navLinkClass}>Blogs</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink></li>
          </ul>
        </div>

        {/* Mobile menu button */}
        <div className="navbar-end lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop contact button */}
        <div className="navbar-end hidden lg:flex">
          <NavLink to="/contact">
            <button className="btn btn-lg bg-[var(--button-background)] text-white px-8 py-3 font-medium rounded-full tracking-wider hover:bg-green-800 transition-colors">
              Contact Now
            </button>
          </NavLink>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col items-end bg-white gap-3 text-xl w-[40vw]">
            <li><NavLink to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/bookings" className={navLinkClass} onClick={() => setIsOpen(false)}>My Bookings</NavLink></li>
            <li><NavLink to="/blogs" className={navLinkClass} onClick={() => setIsOpen(false)}>Blogs</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClass} onClick={() => setIsOpen(false)}>Contact Us</NavLink></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;