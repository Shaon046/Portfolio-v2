import React from 'react';
import Image from 'next/image';
import Logo from './utilities/Logo';


const Navbar = () => {
  return (
    <nav class='flex h-18 w-2/2 bg-primary-blue p-2'>

{/* Left container */}
   <div class='flex px-8 align-middle w-1/2' >
    {/* <Image src="/logo.png" alt="Logo" height={60} width={116}  /> */} 
    <Logo />
   </div>


   {/* Right Container */}
   <div class='flex px-8 justify-end items-center  w-1/2'>
   <ul class="flex space-x-4 text-xl text-primary-yellow">
    <li className=' cursor-pointer '>About</li>
    <li className=' cursor-pointer '>Projects</li>
    <li className=' cursor-pointer '>Contacts</li>
</ul>

   </div>
    </nav>
  );
};

export default Navbar;
