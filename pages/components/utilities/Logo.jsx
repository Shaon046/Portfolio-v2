import React from "react";

const Logo = ({size,color,border}) => {
  return (
    <div
      className="h-16 w-16 flex justify-center items-center text-4xl text-primary-yellow"
      style={{
        height:`${size}`,
        borderRadius: "50px",
        boxShadow: `${ border?border:"5px 0px 0px #FA2256" }`,
       color:`${color}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        lineHeight: "0",


      }}
    >
      <p className=" translate-y-1">S</p>
      <p className="text-sm translate-y-2 ">haon</p>
    </div>
  );
};

export default Logo;
