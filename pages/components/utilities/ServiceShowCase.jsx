import React from "react";
import styled from "styled-components";

const ServiceShowCase = ({ x, image, service, description }) => {
  const dynamicStyle = {
    transform: `translate(${x})`,
  };

  return (
    <div
      style={{ height: "400px", ...dynamicStyle }}
      className="flex flex-col items-center w-[300px] relative rounded-lg shadow-2xl   p-2 bg-gradient-card xs:mt-10 md:mt-0   "
    >
      <div
        className="h-3/5 w-5/6  bg-blue-600 rounded-xl mt-6 "
        style={{
          backgroundImage: `url(services/${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <p className=" text-2xl font-bold mt-4">{service}</p>
      <p className="text-md text-center">{description}</p>
    </div>
  );
};

export default ServiceShowCase;
