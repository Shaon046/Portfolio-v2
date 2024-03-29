import React from 'react';
import styled from 'styled-components'
import Image from 'next/image';



const Navbar = () => {
  return (
    <nav class='flex h-16 w-2/2'>

{/* Left container */}
   <div class='flex px-8   align-middle w-1/2 bg-slate-50' >
    <Image src="/logo.png" alt="Logo" height={60} width={116}  />
   </div>


   {/* Right Container */}
   <div class='flex px-8 justify-end items-center  w-1/2 bg-slate-600'>
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
