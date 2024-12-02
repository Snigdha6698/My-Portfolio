import React from 'react';
import "./navbar.css";
import { FaReact } from "react-icons/fa";
//import {AnchorLink} from "react-anchor-link-smooth-scroll";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <div className='Navbar'>
            <FaReact size={50} />
            <ul className='nav-menu'>
                <li><Link to="home" smooth={true} className="nav-link">
                    Home
                </Link></li>

                <li><Link to="about" smooth={true} duration={500} className="nav-link">
                    About Me
                </Link></li>
                <li><Link to="skills" smooth={true} duration={500} className="nav-link">
                    Skills
                </Link></li>
                <li><Link to="experience" smooth={true} duration={500} className="nav-link">
                    Experience
                </Link></li>
                <li><Link to="education" smooth={true} duration={500} className="nav-link">
                    Education
                </Link></li>

            </ul>
            <div className='nav-connect'>
              <Link to="contact" smooth={true} duration={500} className="nav-link">
                    Lets Connect
                </Link>
            </div>

        </div >

    )


}

export default Navbar;