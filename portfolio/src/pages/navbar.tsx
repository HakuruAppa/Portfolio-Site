import { useState } from "react";
import {NavLink} from "react-router-dom";
import './NavBar.css';

import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaBehance,
  FaYoutube,
  FaSun,
  FaMoon,
} from 'react-icons/fa';
//import { HiOutlineMail } from 'react-icons/hi';
//import { BsFillPersonLinesFill } from 'react-icons/bs';

import { Link } from 'react-scroll';

const Navbar = () => {
  // State to handle mobile menu toggle (open/closed)
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  // State to handle theme toggle (light/dark)
  const [theme, setTheme] = useState('light');
  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

  return (
    // Main navbar container - fixed at top, full width
    <div className='NavBar fixed w-full h-20 flex justify-between items-center px-4 '>

      <div>
        <h1 className='font-thin text-2xl italic font-serif'>Anuk A.</h1>
      </div>
      <div className='flex justify-self-end gap-x-4'>
        <a href="https://www.linkedin.com/in/anukahangamgoda/" className='flex px-0'>
         <FaLinkedin size={20} />
        </a>
   
        <a href="https://github.com/HakuruAppa" className='flex justify-between items-center w-full  px-0'>
           <FaGithub size={20} />
        </a>
    
        <a href="https://www.behance.net/hakuru" className='flex justify-between items-center w-full  px-0'>
           <FaBehance size={20} />
        </a>
        <a href="https://www.youtube.com/@hakuru" className='flex justify-between items-center w-full  px-0'>
           <FaYoutube size={20} />
        </a>
      </div>
      
      {/* Desktop Menu - hidden on mobile, flex on medium screens and up */}
      <ul className='hidden md:flex gap-x-8'>
        <li>
          <NavLink to='home'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='dev'>
            Dev
          </NavLink>
        </li>
        <li>
          <NavLink to='art'>
            Art
          </NavLink>
        </li>
        <li>
          <NavLink to='contact'>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Hamburger Icon - visible only on mobile */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>

      {/* Mobile Menu - full screen overlay */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen  flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <NavLink onClick={handleClick} to='home'>
            Home
          </NavLink>
        </li>
        <li className='py-6 text-4xl'>
          <NavLink onClick={handleClick} to='dev'>
            Dev
          </NavLink>
        </li>
        <li className='py-6 text-4xl'>
          <NavLink onClick={handleClick} to='art'>
            Art
          </NavLink>
        </li>
        <li className='py-6 text-4xl'>
          <NavLink onClick={handleClick} to='contact'>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Theme Toggle */}
      <div onClick={handleThemeToggle} className='z-10 cursor-pointer'>
        {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
      </div>

      
    </div>
  );
};

export default Navbar;