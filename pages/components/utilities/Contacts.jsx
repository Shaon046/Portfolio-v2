import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contacts = () => {
  return (
    <>
      <div className="grid md:grid-cols-2  items-between xs:justify-center md:justify-normal  bg-primary-blue">
        <div className=" flex flex-col items-center justify-between ">
          {/* part 1 */}
          <div className=" bg-primary-gray p-4 w-[60%] xs:mb-4 md:mb-0  xs:w-[80%] md:w-[60%]">
            <div className=" flex justify-start items-center ">
              <div className=" h-24 w-24 bg-primary-blue flex items-center justify-center">
                <MailOutlineIcon style={{ fontSize: "50px", color: "white" }} />
              </div>
              <div className="p-8 ">
                <p className=" text-lg font-semibold text-primary-blue  ">
                  {" "}
                  Bshaon19@gmail.com
                </p>
                <button className=" transition-all duration-200 hover:text-primary-green">
                  Send Email
                </button>
              </div>
            </div>
          </div>

          {/* part 2 */}
          <div className="  bg-primary-gray p-4 mt-4 xs:w-[80%] md:w-[60%]   ">
            <div className=" flex justify-start items-center ">
              <div className=" h-24 w-24 bg-primary-blue flex items-center justify-center">
                <WhatsAppIcon style={{ fontSize: "50px", color: "white" }} />
              </div>
              <div className="p-8">
                <p className=" text-lg font-semibold text-primary-blue   ">
                  {" "}
                  WhatsApp
                </p>
                <button className=" transition-all duration-200 hover:text-primary-green">
                  Send a Message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* //part 3 */}

        <div className="bg-primary-gray xs:m-auto md:m-0 md:mr-8  xs:w-[80%] md:w-[80%] ">
          <div className="flex flex-col p-4 m-4 ">
            <input
              className="max-h-10 mb-4 focus:outline-none p-4 "
              type="text"
              placeholder="Your Name"
            />

            <input
              className="max-h-10 mb-4 focus:outline-none p-4 "
              type="email"
              placeholder="Your Email"
            />

            <textarea
              className=" mb-4 focus:outline-none p-4 "
              id="msg"
              name="msg"
              rows="4"
              cols="50"
              placeholder="Your Message"
            />

            <div>
              <button className="max-h-10 w-16 bg-primary-blue text-primary-yellow">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
