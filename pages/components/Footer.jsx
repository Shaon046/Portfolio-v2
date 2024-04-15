import React from 'react'
import Logo from './utilities/Logo'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image'

const Footer = () => {
  return (
<>
{/* <Image src="/wave.png" height={10} width={1400} alt="wave"  /> */}

    <div className='flex justify-center items-center h-20 w-[100%] bg-primary-light '>
        
<div className=' w-1/3 h-[100%] flex items-center ml-4'>
    <Logo color="#162936"  />
 </div>        
        <div className=' w-1/3 flex items-center justify-center h-[100%]'>

<p className='text-xl'>&copy; 2024 by Shaon Bhattacharjee.</p>
        </div>

        <div className=' w-1/3 flex items-center  justify-end  h-[100%]'>
            <div className='mr-4'>
            <LinkedInIcon sx={{fontSize:"40px" }}/>
        <GitHubIcon sx={{fontSize:"40px" }}/>
            </div>
        
        </div>

       
        </div>
        </>
        
  )
}

export default Footer