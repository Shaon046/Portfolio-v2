import React from "react";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";

const ProjectShowcase = ({ image, project, viewLink, gitLink }) => {
  return (
    <div className="xs:h-[350px] sm:h-[400px] w-[300px] py-4 bg-gradient-card rounded-lg border-2  transition-all duration-500 hover:-translate-x-1 hover:-translate-y-1 m-auto  mb-12">
      <div
        className="h-[70%]  w-[90%] m-auto rounded-lg "
        style={{
          backgroundImage: `url(projects/${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className=" md:ml-2 mt-4 flex justify-center">
        <p className="text-2xl text-bold font-semibold text-primary-blue">
          {project}
        </p>
      </div>

      <div className="flex justify-evenly mt-4">
        <Link href={viewLink} target="_blank">
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
        </Link>
        <Link href={gitLink} target="_blank">
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
        </Link>
      </div>
    </div>
  );
};

export default ProjectShowcase;
