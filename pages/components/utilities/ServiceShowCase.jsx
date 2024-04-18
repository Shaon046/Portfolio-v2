import React from "react";
import styled from "styled-components";



const ServiceShowCase = ({ height, x, y }) => {

  const dynamicStyle = {
    height: height, 
    transform: `translate(${x}, ${y})`, 
  };

  return (
    <div style={dynamicStyle}  className="flex flex-col items-center w-[300px] relative rounded-lg shadow-2xl p-2 bg-primary-light xs:mt-10 md:mt-0   " >
      <div className="h-3/5 w-5/6  bg-blue-600 rounded-xl mt-6 "></div>

      <p className=" text-2xl font-bold mt-4">Service</p>
      <p className="text-sm text-center">
        Fast Refresh had to perform a full reload when ./pages/Test.js changed.{" "}
      </p>
    </div>
  );
};

export default ServiceShowCase;
