import React, { useState } from "react";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Image from "next/image";

const Index = () => {
  const [lightOn,setLightOn] = useState(false);

const onLightHandler=()=>{
  setLightOn((prev)=>!prev)
}

console.log(lightOn)
  return (
    <>
      <Navbar />
      <section class="">
        {/* light */}
        <div class="flex  items-center flex-col w-6 absolute left-8 bg-slate-400">
          <div class="flex  h-40 w-0.5 bg-black"></div>
          <button class='-translate-y-0.5' onClick={()=>onLightHandler()}>
           {!lightOn && <Image src="/light/bulb.png" alt="" height={24} width={22} />}
           {lightOn && <Image src="/light/bulbOn.png" alt="" height={24} width={22} />}
          </button>
        </div>
      </section>
    </>
  );
};

export default Index;
