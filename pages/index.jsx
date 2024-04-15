import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ServiceShowCase from "./components/utilities/ServiceShowCase";
import ProjectShowcase from "./components/utilities/ProjectsShowcase";
import Skills from "./components/utilities/Skills";
import Logo from "./components/utilities/Logo";
import Footer from "./components/Footer";

import LocalPostOfficeTwoToneIcon from "@mui/icons-material/LocalPostOfficeTwoTone";
import Contacts from "./components/utilities/Contacts";

const PhotoBackground = styled.div`
  background-color: antiquewhite;
  border-radius: 49% 51% 58% 44% / 66% 41% 75% 34%;
  overflow: hidden;
`;

const cursor = keyframes`
  50%{border-left:transparent}
`;

const cursorMove = keyframes`
60%{left:100%};
 100%{left:0}
`;
const slide = keyframes`
 100%{transform:translate(0,-100%)}
`;

const ChangingText = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-left: 10px;
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

const Index = () => {
  //states
  const [lightOn, setLightOn] = useState(false);
  const [expand, setExpand] = useState(false);

  //handler functions
  const onLightHandler = () => {
    setLightOn((prev) => !prev);
  };

  useEffect(() => {
    setExpand(true);

    setTimeout(() => {
      setExpand(false);
    }, 300);
  }, [lightOn]);
  //handler functions

  const skills = [
    { name: "Javascript", percent: 80 },
    { name: "node", percent: 70 },
    { name: "react", percent: 80 },
    { name: "next js", percent: 75 },
    { name: "html&css", percent: 85 },
    { name: "Tailwind", percent: 80 },
  ];

  return (
    <div style={{ background: "url(main.svg)" }}>
      {/* part 1 */}

      {/* Hero section */}
      <section class="h-screen w-2/2  ">
        <div className="grid grid-cols-3  ">
          {/* flex  left section*/}
          <div className="flex col-span-2 items-center justify-center relative">
            <Image
              className="absolute top-40"
              src="/sprinkles1.png"
              alt="sprinkels"
              height={150}
              width={100}
            />
            {/* <Image className="absolute top-56" src="/sprinkles2.png" alt="sprinkels" height={200} width={200}/> */}
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

              <div className=" text-4xl" overflow-hidden>
                A PASSIONATE
                <ChangingTextConatiner className="h-7">
                  <ChangingText className="text-primary-red font-semibold">
                    <div>REACT</div>
                    <div>NODE </div>
                    <div> MERN</div>
                  </ChangingText>
                </ChangingTextConatiner>
                <span className="m-2">DEVELOPER</span>
              </div>

              <p className=" text-lg">
                Step into my digital domain, where each line of code tells a
                story of problem-solving and innovation. <br /> My portfolio is
                a testament to the full-stack journey — from concept to
                deployment. <br />
              </p>

              <div>
                <button className="bg-primary-green  py-2  px-4 text-lg mr-6 hover:text-primary-blue hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all hover:shadow-glow">
                  Download CV
                </button>
                <button className="bg-primary-red py-2  px-4 text-lg mr-4 hover:text-primary-blue hover:-translate-y-0 hover:-translate-x-0.5 transition-all hover:shadow-glow">
                  {"Let's Talk"}
                </button>
              </div>
            </div>
          </div>

          {/* flex  right section*/}
          <div className="flex    relative justify-end  overflow-hidden py-4">
            {/* light
            <div class="flex  items-center flex-col w-6 absolute left-8 bg-slate-400 z-10">
              <div
                class={`flex   w-0.5 bg-black transition-height duration-300 ease-in-out ${
                  expand ? "h-28" : "h-24"
                }`}
              />
              <button
                class="-translate-y-0.5"
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
                class={`w1/2 filter transition-all duration-300   brightness-75 z-30   `}
                src="/hero1.png"
                alt="Hero"
                height={300}
                width={350}
                style={{ height: "90vh", widt: "auto" }}
              />
            </PhotoBackground>
          </div>
        </div>
      </section>

      {/* part 2 */}

      <section className="h-screen">
        <Parallax pages={5}>
          {/* ABOUT */}
          <ParallaxLayer offset={0} speed={1}>
            <div className="flex flex-col items-center h-screen p-8 ">
              <p className="text-5xl font-bold text-white  mb-6">ABOUT</p>

              <div
                className="flex flex-col items-center  h-[400px]  w-[60%]  p-4"
                style={{ background: " rgba(255, 255, 255, 0.6)" }}
              >
                <Logo size={"66px"} />
                <p className="text-xl font-semibold tracking-wide  mt-10 m-auto w-[90%] text-center ">
                  As a certified MERN developer with a passion for the field, I
                  am in search of a position that not only lets me further
                  refine and enhance my web development capabilities but also
                  delivers high-quality results. I am eager to find an
                  environment that fosters growth and development in React,
                  enabling me to thrive as a developer.
                </p>

                <Button
                  variant="contained"
                  style={{
                    color: "#FBE094",
                    backgroundColor: "#162936",
                    transform: "translateY(-100%)",
                  }}
                >
                  GITHUB
                </Button>
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={1}>
            <div className="flex flex-col items-center  ">
              <p className="  text-5xl font-bold text-white my-2">
                PROFESSIONAL
              </p>
              <p className=" text-xl  text-white ">
                {" "}
                MY KNOWLEDGE LEVEL IN SOFTWARE
              </p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={2} className="pt-24">
            <div className="w-full flex flex-col items-start">
              <div className=" h-screen w-[70%] m-auto">
                {skills.map((data, idx) => (
                  <Skills
                    name={data.name}
                    percent={data.percent}
                    key={idx + data.name}
                  />
                ))}
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={1}>
            <div className="flex justify-center">
              <p className="  text-4xl font-bold text-white mt-4">Projects</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={3}>
            <div className="grid grid-cols-3 w-[100%] h-screen items-center justify-center ">
              <ProjectShowcase />
              <ProjectShowcase />
              <ProjectShowcase />
            </div>

            <div className="grid grid-cols-3 w-[100%] h-screen items-center justify-center ">
              <ProjectShowcase />
              <ProjectShowcase />
              <ProjectShowcase />
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={5}>
            <div className="flex justify-center">
              <p className="  text-4xl font-bold text-white mt-4">Services</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={5}
            className="flex items-center justify-center "
          >
            <ServiceShowCase height={"400px"} x={"-90%"} y={"0px"} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={2}
            className="flex items-center justify-center z-10"
          >
            <ServiceShowCase
              height={"420px"}
              x={"-0px"}
              y={"0px"}
              margin={"300px"}
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            speed={5}
            className="flex items-center justify-center"
          >
            <ServiceShowCase
              height={"400px"}
              x={"90%"}
              y={"0px"}
              margin={"600px"}
            />
          </ParallaxLayer>

          {/* contacts */}
          <ParallaxLayer offset={4} speed={3} className="mt-4">
            <Contacts />
          </ParallaxLayer>
        </Parallax>
      </section>

      {/* footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Index;
