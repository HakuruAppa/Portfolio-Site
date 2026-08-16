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

} from 'react-icons/fa';
//import { HiOutlineMail } from 'react-icons/hi';
//import { BsFillPersonLinesFill } from 'react-icons/bs';

//import { Link } from 'react-scroll';

const Navbar = () => {
  // State to handle mobile menu toggle (open/closed)
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);


  return (
    // Main navbar container - fixed at top, full width
    <div className='NavBar sticky top-0 w-full h-12 flex justify-between items-center px-4 drop-shadow-md'>

      <div>
        <h1 className='font-thin text-8xl'>Anuk A.</h1>
      </div>
      
      <div className='flex justify-between items-center gap-x-12'>
      <div className='flex gap-x-4 items-center'>
        <a href="https://www.linkedin.com/in/anukahangamgoda/">
         <FaLinkedin size={20} />
        </a>
   
        <a href="https://github.com/HakuruAppa">
           <FaGithub size={20} />
        </a>
    
        <a href="https://www.behance.net/hakuru">
           <FaBehance size={20} />
        </a>
        <a href="https://www.youtube.com/@hakuru" className="md:mr-8">
           <FaYoutube size={20} />
        </a>

        
     
      
      {/* Desktop Menu - hidden on mobile, flex on medium screens and up */}
      <ul className='hidden md:flex gap-x-8'>
        <li>
          <NavLink style={({ isActive }) => (isActive ? { color: 'var(--accent)' } : {})} to='home'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={({ isActive }) => (isActive ? { color: 'var(--accent)' } : {})} to='dev'>
            Dev
          </NavLink>
        </li>
        <li>
          <NavLink style={({ isActive }) => (isActive ? { color: 'var(--accent)' } : {})} to='art'>
            Art
          </NavLink>
        </li>
        <li>
          <NavLink style={({ isActive }) => (isActive ? { color: 'var(--accent)' } : {})} to='contact'>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Hamburger Icon - visible only on mobile */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>
       </div>

      {/* Mobile Menu - full screen overlay */}
      <ul id="mobile-menu"  className={`absolute top-0 left-0 w-full h-screen  flex flex-col justify-center items-center transform delay-100 transition-all duration-150 ${
        nav ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}`}>

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
      </div>


      
    </div>
  );
};

export default Navbar;