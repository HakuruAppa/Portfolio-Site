import { useState } from "react";

import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaBehance,
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
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
    };

  return (
    // Main navbar container - fixed at top, full width
    <div className='fixed w-full h-20 flex justify-between items-center px-4 '>

      <div>
        <h1 className='font-thin text-2xl italic font-serif'>Anuk A.</h1>
      </div>
      <div>
        <a href="https://linkedin.com/" className='flex  px-0'>
         <FaLinkedin size={20} />
        </a>
      </div>
      <div>
        <a href="https://github.com" className='flex justify-between items-center w-full  px-0'>
           <FaGithub size={20} />
        </a>
      </div>
      <div>
        <a href="https://behance.net" className='flex justify-between items-center w-full  px-0'>
           <FaBehance size={20} />
        </a>
      </div>
      
      {/* Desktop Menu - hidden on mobile, flex on medium screens and up */}
      <ul className='hidden md:flex gap-x-8'>
        <li>
          <Link to='home' smooth duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='dev' smooth duration={500}>
            Dev
          </Link>
        </li>
        <li>
          <Link to='art' smooth duration={500}>
            Art
          </Link>
        </li>
        <li>
          <Link to='contact' smooth duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Icon - visible only on mobile */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>

      {/* Mobile Menu - full screen overlay */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen  flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='dev' smooth duration={500}>
            Dev
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='art' smooth duration={500}>
            Art
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth duration={500}>
            Contact
          </Link>
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