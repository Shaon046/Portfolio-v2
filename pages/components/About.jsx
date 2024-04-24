import React from "react";
import Button from "@mui/material/Button";
import Logo from "./utilities/Logo";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col items-center min-h-screen  xs:p-2 md:p-8 ">
      <p className=" xs:text-3xl md:text-5xl font-bold text-white  mb-6">
        ABOUT
      </p>

      <div
        className="flex flex-col items-center  min-h-[400px] xs:w-[90%] sm:w-[80%] md:w-[80%] lg:[60%]  p-4"
        style={{ background: " rgba(255, 255, 255, 0.6)" }}
      >
        <Logo size={"66px"} />
        <p className="text-xl font-semibold tracking-wide  mt-10 m-auto w-[90%] text-center ">
          As a certified MERN developer with a passion for the field, I am in
          search of a position that not only lets me further refine and enhance
          my web development capabilities but also delivers high-quality
          results. I am eager to find an environment that fosters growth and
          development in React, enabling me to thrive as a developer.
        </p>

        <Link href="https://github.com/Shaon046" >
          <Button
            variant="contained"
            style={{
              color: "#FBE094",
              backgroundColor: "#162936",
              margin: "20px",
            }}
          >
            GITHUB
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default About;
