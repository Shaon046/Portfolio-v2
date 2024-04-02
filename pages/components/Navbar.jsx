import React from 'react';
import Image from 'next/image';



const Navbar = () => {
  return (
    <nav class='flex h-16 w-2/2 bg-primary-blue'>

{/* Left container */}
   <div class='flex px-8 align-middle w-1/2' >
    {/* <Image src="/logo.png" alt="Logo" height={60} width={116}  /> */} LOGO
   </div>


   {/* Right Container */}
   <div class='flex px-8 justify-end items-center  w-1/2'>
   <ul class="flex space-x-4">
    <li className=' cursor-pointer'>About</li>
    <li className=' cursor-pointer'>Projects</li>
    <li className=' cursor-pointer'>Contacts</li>
</ul>

   </div>
    </nav>
  );
};

export default Navbar;
