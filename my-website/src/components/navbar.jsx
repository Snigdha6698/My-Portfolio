import React, { useState } from 'react';
import { FaBars, FaReact } from "react-icons/fa";
import {Link} from 'react-router-dom';
import {HiX} from 'react-icons/hi';


const data=[
    {
    label: 'Home',
    to:'/'
    },
    {
        label: 'About',
        to:'/About'
    },
    {
        label:'Projects',
        to:'/Projects'
    },
    {
        label:'Skills',
        to:'/Skills'
    },
    {
        label:'Contact',
        to:'/Contact'

    }


]


const Navbar=()=>{
    const [toggleIcon,setToggleIcon]= useState(false);
    const handleToggleIcon=()=>{
        setToggleIcon(!toggleIcon)
    }
    return(
        <div>
            <nav className='navbar'>
                <div className='navbar_container'>
                    <Link to={'/'} className='navbar_container_logo'>
                        <FaReact size={50} />
                    </Link>
                </div>
                <ul className='navbar_container_menu'>
                    {
                        data.map((item,key)=>(
                            <li key={key}className='navbar_container_menu_item'>
                            <Link className='navbar_container_menu_item_links'to={item.to}>
                            {item.label}
                            </Link>
                            </li>
                            
                        ) 
                        )
                    }
                </ul>
                <div className='navicon' onClick={handleToggleIcon}>
                    {
                        toggleIcon? <HiX size={30}/> :<FaBars size={30}/>
                    }

                </div>

            </nav>
        
        </div>
        


    )
}
export default Navbar;
