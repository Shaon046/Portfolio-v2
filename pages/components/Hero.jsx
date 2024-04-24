import React from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "./Navbar";
import Link from "next/link";
import Image from "next/image";

import LocalPostOfficeTwoToneIcon from "@mui/icons-material/LocalPostOfficeTwoTone";
const slide = keyframes`
 100%{transform:translate(0,-100%)}
`;

const cursorMove = keyframes`
60%{left:100%};
 100%{left:0}
`;

const cursor = keyframes`
  50%{border-left:transparent}
`;

const ChangingText = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-left: 5px;
  animation: ${slide} 6s steps(3) infinite;
`;

const ChangingTextConatiner = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    left: 100%;
    height: 100%;
    width: 100%;
    border-left: 2px solid white;
    background-color: #162936;
    animation: ${cursorMove} 2s steps(10) infinite, ${cursor} 1s infinite;
  }
`;

const PhotoBackground = styled.div`
  background-color: antiquewhite;
  border-radius: 49% 51% 58% 44% / 66% 41% 75% 34%;
  overflow: hidden;
`;

const Hero = () => {
  return (
    <section className="xs:p-4 sm-p-4 md:p-0">
      <Navbar />
      <div className="grid  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:rid-cols-3 2xl:rid-cols-3 items-center ">
        {/* flex  left section*/}
        <div className="flex xs:mt-10 sm:mt-10 md:mt-0 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2  items-center justify-center relative ">
          {/* text container */}
          <div className="flex flex-col  text-7xl text-primary-yellow  ">
            <div>
              <p>
                <span>I</span>
                <span className="text-primary-red">{"'"}</span>
                <span>M</span>
              </p>
              <p>
                <span>SHAON</span>
              </p>
            </div>

            <div className=" text-4xl  overflow-hidden">
              A PASSIONATE
              <ChangingTextConatiner className="h-7">
                <ChangingText className="text-primary-red font-semibold">
                  <div>REACT</div>
                  <div>NODE </div>
                  <div> MERN</div>
                </ChangingText>
              </ChangingTextConatiner>
              <span className="">DEVELOPER</span>
            </div>

            <p className=" text-lg">
              Step into my digital domain, where each line of code tells a story
              of problem-solving and innovation. <br /> My portfolio is a
              testament to the full-stack journey — from concept to deployment.{" "}
              <br />
            </p>

            <div>
              <Link href={"resume/Shaon-React_Node.pdf"}>
                <button className="bg-primary-green  py-2  px-4 text-lg mr-6 hover:text-primary-blue hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all hover:shadow-glow">
                  Download CV
                </button>
              </Link>

              <a href={"#contact"} >
                <button className="bg-primary-red py-2  px-4 text-lg mr-4 hover:text-primary-blue hover:-translate-y-0 hover:-translate-x-0.5 transition-all hover:shadow-glow">
                  {"Let's Talk"}
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* flex  right section*/}
        <div className="flex  relative justify-center xs:mt-10 sm:mt-10 md:mt-0  overflow-hidden py-4 ">
          {/* light
    <div className="flex  items-center flex-col w-6 absolute left-8 bg-slate-400 z-10">
      <div
        className={`flex   w-0.5 bg-black transition-height duration-300 ease-in-out ${
          expand ? "h-28" : "h-24"
        }`}
      />
      <button
        className="-translate-y-0.5"
        onClick={() => {
          onLightHandler();
        }}
      >
        {!lightOn && (
          <Image src="/light/bulb.png" alt="" height={24} width={22} />
        )}
        {lightOn && (
          <Image
            src="/light/bulbOn.png"
            alt=""
            height={24}
            width={22}
          />
        )}
      </button>
    </div> */}

          <PhotoBackground>
            <Image
              className={`w1/2 filter transition-all duration-300   brightness-75 z-30   `}
              src="/hero1.png"
              alt="Hero"
              height={300}
              width={350}
              style={{ maxHeight: "90vh", width: "auto" }}
            />
          </PhotoBackground>
        </div>
      </div>
    </section>
  );
};

export default Hero;
