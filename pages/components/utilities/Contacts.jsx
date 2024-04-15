import React from 'react'
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contacts = () => {
  return (
    <>
    <div className="grid grid-cols-2 h-screen items-center  bg-primary-blue">
        <div className=" flex flex-col items-center justify-between h-[60%]">
          {/* part 1 */}
          <div className=" bg-primary-gray p-4 w-[60%]">
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
          <div className="  bg-primary-gray p-4 mt-4 w-[60%]">
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
        <div className="bg-primary-gray  h-[60%] mr-8">
          <div className="flex flex-col p-4 m-4 ">
            <input
              className="h-10 mb-4 focus:outline-none p-4 "
              type="text"
              placeholder="Your Name"
            />

            <input
              className="h-10 mb-4 focus:outline-none p-4 "
              type="email"
              placeholder="Your Email"
            />

            <textarea
              className=" mb-4 focus:outline-none p-4 "
              id="w3review"
              name="w3review"
              rows="4"
              cols="50"
              placeholder="Your Message"
            />

            <div>
              <button className="h-10 w-16 bg-primary-blue text-primary-yellow">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacts