import React, { useEffect, useState } from "react";

import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

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

  return (
    <>
      {/* part 1 */}

      {/* Hero section */}
      <section class="h-screen w-2/2">
        <div className="grid grid-cols-3  ">
          {/* flex  left section*/}
          <div className="flex bg-primary-blue col-span-2 items-center justify-center relative">
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
                  <span className="text-primary-red">'</span>
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
            </div>
          </div>

          {/* flex  right section*/}
          <div className="flex    relative justify-end  bg-primary-blue overflow-hidden py-4">
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
                height={400}
                width={400}
                style={{ height: "100vh" }}
              />
            </PhotoBackground>
          </div>
        </div>
      </section>

      {/* part 2 */}

      <section>
  <Parallax pages={2} style={{
        backgroundImage: `url("background.jpg")`,
        backgroundSize: "cover",
       
      }}>
    <ParallaxLayer
      speed={3}
      factor={1}
      style={{
        backgroundImage: `url("background1.jpg")`,
        backgroundSize: "cover",
       
      }}
    >
      hello world
    </ParallaxLayer>
    <ParallaxLayer
      offset={1}
      speed={0.5}
      factor={1}
      style={{
        backgroundImage: `url("background2.jpg")`,
        backgroundSize: "cover",
   
      }}
    >
      bye world
    </ParallaxLayer>
  </Parallax>
</section>
    </>
  );
};

export default Index;
