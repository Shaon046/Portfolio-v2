import React, { useEffect, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ServiceShowCase from "./components/utilities/ServiceShowCase";
import ProjectShowcase from "./components/utilities/ProjectsShowcase";
import Skills from "./components/utilities/Skills";
import Footer from "./components/Footer";
import Contacts from "./components/utilities/Contacts";
import About from "./components/About";
import Hero from "./components/Hero";
import Certificates from "./components/utilities/Certificates";

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

  const services = [
    {
      x: "-95%",
      speed: 0.5,
      image: "fullstack.jpeg",
      service: "Fullstack",
      description: "Innovate with React and Node web development",
      stack: 1,
    },
    {
      x: "-0px",
      speed: 0.2,
      image: "database.jpg",
      service: "Database Management",
      description: "Streamline database management with MySQL and MongoDB",
      stack: 2,
    },
    {
      x: "95%",
      speed: 0.5,
      image: "ui.webp",
      service: "UI",
      description: "Build visually captivating user experiences",
      stack: 1,
    },
  ];

  const projects = [
    {
      image: "project-1.png",
      project: "Flipkart Clone",
      viewLink: "https://flipkart-dev-sb.herokuapp.com/",
      gitLink: "https://github.com/Shaon046",
    },
    {
      image: "project-2.png",
      project: "Expence Manager",
      viewLink: "https://myexpences-tracker.netlify.app/",
      gitLink: "https://github.com/Shaon046/ExpenseTracker-react-",
    },
    {
      image: "project-3.png",
      project: "FoodBuddies",
      viewLink: "https://foodbuddies-th.netlify.app/",
      gitLink: "https://github.com/Shaon046/Workable",
    },
    {
      image: "project-4.png",
      project: "Workable Ui Clone",
      viewLink: "https://ui-workable.netlify.app/",
      gitLink: "https://github.com/Shaon046/FoodBuddies_React_App",
    },
    {
      image: "project-5.png",
      project: "Tic-Tac-Toe",
      viewLink: "https://pop-tic-tac-toe.netlify.app/",
      gitLink: "https://github.com/Shaon046/Tic-Tac-Toe",
    },
    {
      image: "project-6.png",
      project: "PhotoBucket",
      viewLink: "https://photo-buckets.netlify.app/",
      gitLink: "https://github.com/Shaon046/Photo-Bucket",
    },
  ];

  return (
    <div style={{ background: "url(main.svg)" }}>
      <section className="min-h-screen ">
        <Parallax pages={7}  >
          {/* Hero Section */}
          <ParallaxLayer offset={0} speed={1}>
            <Hero />
          </ParallaxLayer>

          {/* ABOUT */}
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
            className="min-h-screen  mb-10 xs:invisible md:visible"
          >
            <div className="flex justify-center">
              <p className="  text-6xl font-bold text-white mt-4">PROJECTS</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={1.5}>
            <div className="flex justify-center mb-6 xs:visible md:invisible">
              <p className="  text-4xl font-bold text-white mt-4">PROJECTS</p>
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-3 md:grid-rows-2 w-[100%] items-center justify-center ">
              {projects.map((data, idx) => (
                <ProjectShowcase
                  key={idx}
                  image={data.image}
                  project={data.project}
                  viewLink={data.viewLink}
                  gitLink={data.gitLink}
                />
              ))}
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={4}
            speed={0.5}
            className="xs:invisible md:visible "
          >
            <div className="flex justify-center min-h-screen">
              <p className=" xs:text-3xl md:text-5xl font-bold text-white md:mt-4 ">
                SERVICES
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
              SERVICES
            </p>

            {services.map((data, idx) => (
              <ServiceShowCase
                key={idx}
                image={data.image}
                service={data.service}
                description={data.description}
              />
            ))}
          </ParallaxLayer>

          {/* Desktop view */}
          {services.map((data, idx) => (
            <ParallaxLayer
              key={idx}
              offset={4}
              speed={data.speed}
              className="flex items-center justify-center xs:invisible md:visible"
              style={{ zIndex: data.stack }}
            >
              <ServiceShowCase
                x={data.x}
                image={data.image}
                service={data.service}
                description={data.description}
              />
            </ParallaxLayer>
          ))}

          {/*certificate */}
          <ParallaxLayer
            offset={5}
            speed={0.5}
            className=" relative mt-4 xs:invisible md:visible"
          >
            <div className="flex justify-center mt-8">
              <p className="text-5xl text-primary-gray font-bold uppercase m-4">
                Certificates
              </p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={5} speed={1.5} className=" relative mt-4">
            <Certificates />
          </ParallaxLayer>

          {/* contacts */}
          <ParallaxLayer
            offset={6}
            speed={1}
            id="contact"
            className="relative " 
          >




            <Contacts />
            
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
