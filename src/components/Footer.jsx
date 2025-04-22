// Completed Footer

import React from 'react'
import { NavLink, Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer className="footer footer-horizontal footer-center bg-black text-primary-content py-25">


                <div>
                    <div className="flex items-center gap-3">
                        <img src="https://i.ibb.co.com/JwcTCWRt/logo-footer.png" alt="Law.CF_Logo" />
                        <h3 className="plus-jakarta text-3xl font-bold">Law.CF</h3>
                    </div>
                </div>


                <div className="">
                    <ul className="flex gap-13 px-1 text-xl">
                        <li><NavLink to="/" >Home</NavLink></li>
                        <li><NavLink to="/bookings" >My Bookings</NavLink></li>
                        <li><NavLink to="/blogs" >Blogs</NavLink></li>
                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                    </ul>
                </div>


                <div className='border-t border-dashed border-gray-500 w-full'>
                    <div className="grid grid-flow-col gap-8 w-[10vw] mt-6">
                        <Link to="">
                            <img src="https://i.ibb.co.com/wFgTG0pB/facebook.png" alt="Facebook" />
                        </Link>
                        <Link to="">
                            <img src="https://i.ibb.co.com/fVv4h2Zr/social.png" alt="Instagram" />
                        </Link>
                        <Link to="">
                            <img src="https://i.ibb.co.com/67YXXFgT/linkedin.png" alt="LinkedIn" />
                        </Link>
                    </div>
                </div>


            </footer>
        </>
    )
}
