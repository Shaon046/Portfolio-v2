import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const Certificates = () => {
  let certificates = [
    {
      title:
        "Advanced Certification in Software Engineering & Application Development",
      institute: "Intellipaat",
      file: "1.jpg",
      id: "EICT/2122/017/04/001",
    },

    {
      title: "The Complete JavaScript Course 2022: ",
      institute: "Udemy",
      file: "2.jpg",
      id: "UC-43201560-892b-45e6-9c60-38464126b9T2",
    },

    {
      title: "React - The Complete Guide",
      institute: "Udemy",
      file: "3.jpg",
      id: "UC-c4b9a4b0-bc37-4238-8b4a-58bbbetO0e77",
    },
  ];

  return (
    <div className="h-screen flex flex-col items-center justify-center p-6">
      <div>
        <p className="text-5xl text-primary-gray font-bold uppercase m-4 xs:visible md:invisible">
          Certificates
        </p>
      </div>

      <Carousel
        className=" max-w-full"
        showArrows={true}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={true}
        useKeyboardArrows={true}
        swipeable={true}
      >
        {certificates.map((data, idx) => (
          <div className="flex   justify-around" key={idx}>
            <div className="  md:flex">
              <Image
                src={`/certificates/${data.file}`}
                alt={"certificate"}
                height={300}
                width={300}
                style={{ maxWidth: "300px" }}
              ></Image>

              <div className=" flex flex-col xs:items-center md:items-start justify-between  max-w-[400px]  text-primary-gray pl-2 ">
                <div className=" md:text-start xs:my-2 md:mb-8">
                  <p className=" uppercase xs:text-xl md:text-2xl font-bold ">
                    Certificate Title
                  </p>

                  <p className=" xs:text-md md:text-lg ">{data.title} </p>
                </div>

                <div className=" md:my-4 md:text-start xs:text-lg md:text-xl xs:mb-2 md:mb-4">
                  <p className=" font-semibold ">
                    {" "}
                    <span className="uppercase  font-bold">FROM:</span>
                    {data.institute}
                  </p>
                </div>

                <div>
                  <p className="font-semibold md:text-start xs:lg md:text-xl">
                    {" "}
                    <span className="uppercase  font-bold">
                      Certificate Number:
                    </span>{" "}
                    {data.id}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Certificates;
