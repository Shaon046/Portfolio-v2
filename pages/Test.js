import React from "react";

const test = ({ skill, percent }) => {
  return (
    <div className="flex flex-col items-start h-5">
      <div className="flex items-center h-4  w-full">
        <p className="mr-4 text-md uppercase">react</p>
        <div
          style={{ height: "1rem", width: "80%", backgroundColor: "green" }}
        ></div>
        <p className="text-md uppercase">80%</p>
      </div>
    </div>
  );
};

export default test;
