import React from "react";
import Button from "@mui/material/Button";
import Image from "next/image";

const ProjectShowcase = () => {
  return (
    <div className="h-[400px] w-[300px] py-4 bg-white rounded-lg shadow-glow transition-all duration-500 hover:-translate-x-1 hover:-translate-y-1 m-auto  ">
      <div className="h-[70%]  w-[90%] m-auto bg-red-600 rounded-lg"></div>

      <div className=" ml-2 mt-4 flex justify-center">
        <p className="text-2xl text-bold font-semibold text-primary-blue">
          FLIPKART
        </p>
      </div>

      <div className="flex justify-evenly mt-4">
        <Button
          variant="contained"
          style={{
            backgroundColor: "#162936", // This should match your `primary-blue` color.
            color: "#FBE094", // This should match your `primary-yellow` color.
            display: "flex",
            alignItems: "center",
          }}
        >
          VIEW
          <Image
            className="ml-2"
            src="/gif/view.gif"
            alt=""
            height={20}
            width={20}
          />{" "}
        </Button>
        <Button
          variant="contained"
          style={{
            color: "#FBE094",
            backgroundColor: "#162936",
            display: "flex",
            alignItems: "center",
          }}
        >
          GITHUB
          <Image
            className="ml-1"
            src="/gif/git.gif"
            alt=""
            height={20}
            width={20}
          />{" "}
        </Button>
      </div>
    </div>
  );
};

export default ProjectShowcase;
