//import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'; // Arrow icon for button
//import me from '../assets/me.png'; // Your profile photo
import { Link } from "react-scroll"; // For smooth scrolling

const Home = () => {
 return (
   // Main container - full screen
   <div className="h-screen w-full">
     {/* Content wrapper - centers content and handles responsive layout */}
     <div className="max-w-5xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
       {/* Left side - Text content */}
       <div className="flex flex-col justify-center h-full">
         {/* Main headline */}
         <h2 className="text-4xl sm:text-7xl font-bold">
           Hi, I'm Anuk.
         </h2>
         {/* Brief introduction */}
         <p className=" py-4 max-w-md">
           I have 4 years of experience in graphics design and web development.
           Currently, I love to work on web application using technologies like
           React, Tailwind, Next.js and Mongodb.
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
