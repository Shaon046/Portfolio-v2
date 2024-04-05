import React from 'react'

const Skills = ({name,percent}) => {
  return (
     <div className="flex flex-col items-start h-5 mb-6">
    <div className="flex items-center h-4  w-full"> 
      <p className=" w-20 mr-8  text-md uppercase">{name}</p>
      <div className='h-4  bg-green-500'   style={{  width: `${percent}%`}}></div>
      <p className="text-md  uppercase ml-4">{percent}%</p>
    </div>
  </div>
   
  )
} 

export default Skills