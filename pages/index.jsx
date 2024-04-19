import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Navbar from "./components/Navbar";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ServiceShowCase from "./components/utilities/ServiceShowCase";
import ProjectShowcase from "./components/utilities/ProjectsShowcase";
import Skills from "./components/utilities/Skills";
import Logo from "./components/utilities/Logo";
import Footer from "./components/Footer";
import Link from "next/link";
import LocalPostOfficeTwoToneIcon from "@mui/icons-material/LocalPostOfficeTwoTone";
import Contacts from "./components/utilities/Contacts";
import About from "./components/About";

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

      {/* part 2 */}

      <section className="min-h-screen ">
        <Parallax pages={6} className="overflow-y-hidden">
          {/* ABOUT */}

          <ParallaxLayer offset={0} speed={1}>
            {/* Hero section */}
            <section class="xs:p-4 sm-p-4 md:p-0">
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

                    <div className=" text-4xl" overflow-hidden>
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
                      Step into my digital domain, where each line of code tells
                      a story of problem-solving and innovation. <br /> My
                      portfolio is a testament to the full-stack journey — from
                      concept to deployment. <br />
                    </p>

                    <div>
                      <Link href={"resume/Shaon-React_Node.pdf"}>
                        <button className="bg-primary-green  py-2  px-4 text-lg mr-6 hover:text-primary-blue hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all hover:shadow-glow">
                          Download CV
                        </button>
                      </Link>

                      <a href={"#contact"} scroll={true}>
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
                      style={{ maxHeight: "90vh", width: "auto" }}
                    />
                  </PhotoBackground>
                </div>
              </div>
            </section>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={1}>
            <About />
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={0.25}>
            <div className="flex flex-col items-center  ">
              <p className="xs:text-3xl  md:text-5xl font-bold text-white my-2">
                PROFESSIONAL
              </p>
              <p className="xs:lg md:text-xl  text-white text-center">
                {" "}
                MY KNOWLEDGE LEVEL IN SOFTWARE
              </p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={1} className="pt-24">
            <div className="w-full flex flex-col items-start">
              <div className=" h-screen xs:w-[90%] md:w-[70%] m-auto">
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

          {/* PROJECTS */}
          <ParallaxLayer
            offset={3}
            speed={0.5}
            className="min-h-screen z-20 mb-10 xs:invisible md:visible"
          >
            <div className="flex justify-center">
              <p className="  text-4xl font-bold text-white mt-4">Projects</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={1.5}>
            <div className="flex justify-center mb-6 xs:visible md:invisible">
              <p className="  text-4xl font-bold text-white mt-4">Projects</p>
            </div>
            <div className="grid xs:grid-cols-1 md:grid-cols-3 w-[100%] items-center justify-center ">
              <ProjectShowcase />
              <ProjectShowcase />
              <ProjectShowcase />
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-3 w-[100%]  items-center justify-center ">
              <ProjectShowcase />
              <ProjectShowcase />
              <ProjectShowcase />
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={4}
            speed={0.5}
            className="xs:invisible md:visible "
          >
            <div className="flex justify-center min-h-screen">
              <p className=" xs:text-3xl md:text-5xl font-bold text-white md:mt-4 ">
                Services
              </p>
            </div>
          </ParallaxLayer>

          {/* Services */}

          {/* Mobile view */}
          <ParallaxLayer
            offset={4}
            speed={4}
            className="flex flex-col min-h-[100%] items-center justify-center xs:visible md:invisible"
          >
            <p className=" xs:text-3xl md:text-5xl font-bold text-white xs:mb-6 md:mt-4 ">
              Services
            </p>

            <ServiceShowCase height={"450px"} />
            <ServiceShowCase height={"450px"} />
            <ServiceShowCase height={"450px"} />
          </ParallaxLayer>

          {/* Desktop view */}
          <ParallaxLayer
            offset={4}
            speed={0.5}
            className="flex items-center justify-center xs:invisible md:visible"
          >
            <ServiceShowCase height={"400px"} x={"-90%"} y={"0px"} />
          </ParallaxLayer>
          <ParallaxLayer
            offset={4}
            speed={0.2}
            className="flex items-center justify-center z-10 xs:invisible md:visible"
          >
            <ServiceShowCase
              height={"420px"}
              x={"-0px"}
              y={"0px"}
              margin={"300px"}
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={4}
            speed={0.5}
            className="flex items-center justify-center xs:invisible md:visible"
          >
            <ServiceShowCase
              height={"400px"}
              x={"90%"}
              y={"0px"}
              margin={"600px"}
              className=""
            />
          </ParallaxLayer>

          {/* contacts */}
          <ParallaxLayer offset={5} speed={1} id="contact" className="  mt-4">
            <Contacts />
          </ParallaxLayer>

          <ParallaxLayer offset={5} speed={0.5} className="relative h-screen">
            {/* footer */}
            <footer className="absolute w-full bottom-0 ">
              <Footer />
            </footer>
          </ParallaxLayer>
        </Parallax>
      </section>
    </div>
  );
};

export default Index;
