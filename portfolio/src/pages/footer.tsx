import { useState } from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

import {
    //FaEnvelope,
    //FaPhone,
    FaSun,
    FaMoon,
} from 'react-icons/fa';

import {
    RiArrowRightUpLine,
} from 'react-icons/ri';
//import { HiOutlineMail } from 'react-icons/hi';
//import { BsFillPersonLinesFill } from 'react-icons/bs';

//import { Link } from 'react-scroll';

const Footer = () => {

    // State to handle theme toggle (light/dark)
    const [theme, setTheme] = useState('light');
    const handleThemeToggle = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        //document.documentElement.classList.toggle('dark', newTheme === 'dark');

        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }

        // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
    };

    return (
        // Main footer container - fixed at bottom, full width
        
            <div className='NavBar fixed bottom-0 w-full h-7 md:h-10 flex justify-between items-center px-4 '>

                <div className=" hidden md:flex">
                    <p className='text-sm'>Anuk Ahangamgoda, 2026</p>
                </div>


                <div className='hidden md:flex text-sm md:text-center items-center'>
                        
                        <a href='tel:+16474604939'  className='flex' style={{ fontWeight: 'bold', fontSize: '12px' }}> <RiArrowRightUpLine size={12} /> +1 (647) 460-4939</a>
                        
                        <div className='flex md:mx-8'>
                        <p className='hidden md:flex'> | </p>
                        </div>

                        <a href='mailto:anukahangamgoda@gmail.com'  className='flex' style={{ fontWeight: 'bold', fontSize: '12px' }}> <RiArrowRightUpLine size={12} />anukahangamgoda@gmail.com</a>
                       
                </div>

                <div className='flex md:hidden text-sm md:text-center items-center'>
                    <NavLink to="/contact" className='flex' style={{ fontWeight: 'bold', fontSize: '12px' }}> <RiArrowRightUpLine size={12} /> Contact</NavLink>
                </div>

           
            {/* Theme Toggle */}

            <div onClick={handleThemeToggle} className='cursor-pointer'>
                {theme === 'light' ? <FaMoon className='size-4 md:size-4' /> : <FaSun className='size-4 md:size-4' />}
            </div>


        </div>
    );
};

export default Footer;