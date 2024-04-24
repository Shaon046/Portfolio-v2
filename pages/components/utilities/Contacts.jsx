import React, { useEffect, useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

const Contacts = () => {
  const formTemplate = {
    email: "",
    name: "",
    message: "",
  };

  const [formData, setFormData] = useState(formTemplate);
  const [showSucessMessage, setShowSuccessMessage] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);

  const onFormChangeHandler = (eve) => {
    let field = eve.target.name;

    setFormData((prev) => ({ ...prev, [field]: eve.target.value }));
  };

  const onSendHandler = () => {
    setFormData(formTemplate);

    if ((formData.email && formData.name && formData.message) === "") {
      setIsFormValid(false);
    } else {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000);
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <>
      <div
        className="p-5 flex  "
        style={{ visibility: showSucessMessage ? "visible" : "hidden" }}
      >
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity="success"
          sx={{ width: "max-contant", margin: "auto" }}
        >
          Thank you for reaching out! I will get back to you soon. Have a great
          day ahead!😌
        </Alert>
      </div>

      <div className="grid md:grid-cols-2  items-between xs:justify-center md:justify-normal ">
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
                <Link href="mailto: bshaon19@gmail.com">
                  <button className=" transition-all duration-200 hover:text-primary-green">
                    Send Email
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* part 2 */}
          <div className="  bg-primary-gray p-4 mt-4 xs:w-[80%] md:w-[60%]  xs:mb-4 md:mb-0 ">
            <div className=" flex justify-start items-center ">
              <div className=" h-24 w-24 bg-primary-blue flex items-center justify-center">
                <WhatsAppIcon style={{ fontSize: "50px", color: "white" }} />
              </div>
              <div className="p-8">
                <p className=" text-lg font-semibold text-primary-blue   ">
                  {" "}
                  WhatsApp
                </p>

                <Link
                  href="https://wa.me/9366311783"
                 
                  rel="noopener noreferrer"
                >
                  <button className=" transition-all duration-200 hover:text-primary-green">
                    Send a Message
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* //part 3 */}

        <div className=" bg-primary-gray xs:m-auto md:m-0 md:mr-8  xs:w-[80%] md:w-[80%] ">
          <div className="flex flex-col p-4 m-4 ">
            <input
              className="max-h-10 mb-4 focus:outline-none p-4 "
              type="text"
              placeholder="Your Name"
              name="name"
              onChange={(eve) => onFormChangeHandler(eve)}
              value={formData.name}
            />

            <input
              className="max-h-10 mb-4 focus:outline-none p-4 "
              type="email"
              placeholder="Your Email"
              name="email"
              onChange={(eve) => onFormChangeHandler(eve)}
              value={formData.email}
            />

            <textarea
              className=" mb-4 focus:outline-none p-4 "
              id="msg"
              rows="4"
              cols="50"
              placeholder="Your Message"
              name="message"
              onChange={(eve) => onFormChangeHandler(eve)}
              value={formData.message}
            />

            <div
              className="m-2 text-primary-red font-semibold"
              style={{ visibility: isFormValid ? "hidden" : "visible" }}
            >
              <p>Please fill all required fields 🤨</p>
            </div>
            <div>
              <button
                className="max-h-10 w-16 bg-primary-blue text-primary-yellow"
                onClick={() => onSendHandler()}
              >
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
