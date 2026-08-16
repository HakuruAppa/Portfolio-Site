//import React from 'react';
//import { HiArrowNarrowRight } from 'react-icons/hi'; // Arrow icon for button
//import me from '../assets/me.png'; // Your profile photo
//import { Link } from "react-scroll"; // For smooth scrolling
import { NavLink } from "react-router-dom"; // For navigation links

const Home = () => {
 return (
   // Main container - full screen
   <div className="h-screen w-full">
     {/* Content wrapper - centers content and handles responsive layout */}
     <div className="max-w-5xl mx-auto flex flex-col justify-center p-8 md:flex-row ">
       {/* Left side - Text content */}
       <div className="flex flex-col justify-center">
         {/* Main headline */}
         <h2 className="text-4xl sm:text-7xl font-bold">
           Hi, I'm Anuk.
         </h2>
         {/* Brief introduction */}
         <p className=" py-4 max-w-lg">
           I'm a software developer and artist based in Canada.
           <br></br>
           <br></br>When it comes to software, I specialize in fullstack development with a focus on machine-learning and AI research. 
           <br></br>See more at <NavLink to="/dev" >dev</NavLink> for my work and research projects.
           <br></br>
           <br></br>With art, I have extensive experience as a creative director and mixed-media artist. 
           <br></br>See more at <NavLink to="/art" >art</NavLink> for my creative projects.  
           <br></br>
           <br></br>Feel free to reach out to me for anything, whether it's a project to collaborate on, a mutual opportunity or just to chat! You can find my contact information <NavLink to="/contact" >here</NavLink> or down below.
         </p>

       </div>
       {/* Right side - Profile image */}
       <div>
         {/*<img
           src={me}  
           alt="my profile"
           className="rounded-2xl mx-auto w-2/3 md:w-full"
         />*/}
       </div>
     </div>
   </div>
 );
};

export default Home;
