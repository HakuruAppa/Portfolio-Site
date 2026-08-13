import { useState } from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

import {
    FaEnvelope,
    FaPhone,
    FaSun,
    FaMoon,
} from 'react-icons/fa';
//import { HiOutlineMail } from 'react-icons/hi';
//import { BsFillPersonLinesFill } from 'react-icons/bs';

//import { Link } from 'react-scroll';

const Footer = () => {

    // State to handle theme toggle (light/dark)
    const [theme, setTheme] = useState('light');
    const handleThemeToggle = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        // Main footer container - fixed at bottom, full width
        
            <div className='NavBar fixed bottom-0 w-full h-20 flex justify-between items-center px-4 '>

                <div>
                    <p className='text-sm'>Anuk Ahangamgoda, 2026</p>
                </div>


                {/* Desktop Menu - hidden on mobile, flex on medium screens and up */}
                <div className='md:flex gap-x-4 text-sm justify-between text-center'>
                      
                        <a href='tel:+16474604939' style={{ fontWeight: 'bold' }}>+1 (647) 460-4939</a>
                        <p> | </p>
                        <a href='mailto:anukahangamgoda@gmail.com' style={{ fontWeight: 'bold' }}>anukahangamgoda@gmail.com</a>
                    
                </div>

           
            {/* Theme Toggle */}

            <div onClick={handleThemeToggle} className='cursor-pointer px-4'>
                {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
            </div>


        </div>
    );
};

export default Footer;