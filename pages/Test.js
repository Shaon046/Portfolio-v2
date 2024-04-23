import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const test = () => {
  let certificates = [
    {
      name: "Advanced Certification in Software Engineering & Application Development",
      from: "Intellipaat",
      file: "1.jpg",
    },

    {
      name: "Advanced Certification in Software Engineering & Application Development",
      from: "Udemy",
      file: "2.jpg",
    },

    {
      name: "Advanced Certification in Software Engineering & Application Development",
      from: "Udemy",
      file: "3.jpg",
    },
  ];

  return (
    <div className="h-screen bg-primary-blue flex flex-col items-center justify-center p-6">
      <div>
        <p className="text-5xl text-primary-gray font-bold uppercase">
          Certificates
        </p>
      </div>

      <Carousel
        className=" max-w-full"
        showArrows={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
      
      >
        {certificates.map((data, idx) => (
          <div className="flex justify-around" key={idx} >
          <div className="  bg-white " >
            <Image
              src={`/certificates/${data.file}`}
              alt={"certificate"}
              height={310}
              width={590}
            ></Image>
            
          </div>

          <div className="bg-red-200 flex flex-col items-center">

            <p>  Certificate Title</p>
           <p>Institution  Name</p>
            
            <p>Date of Issuance</p>
            
            Seal or Logo

            <p>Certificate Number or ID:</p>
            <p> Course Duration</p>
           
            </div>

          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default test;
