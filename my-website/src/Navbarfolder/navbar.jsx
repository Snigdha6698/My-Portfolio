import React from 'react';
import "./navbar.css";
import { FaReact } from "react-icons/fa";

const Navbar=()=>{
    return(
        <div className='Navbar'>
            <FaReact size={50}/>
            <ul className='nav-menu'>
                <li>Home</li>
                <li>About Me</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Contact</li>

            </ul>
            <div className='nav-connect'>Let's Connect
            </div>

        </div>

    )

    
}

export default Navbar;