import React, { useState, useRef } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import PortalComponent from "./Portel";
import Backdrop from "@mui/material/Backdrop";
import emailjs from "@emailjs/browser";
const Contacts = () => {
  const formTemplate = {
    email: "",
    name: "",
    message: "",
  };

  const [formData, setFormData] = useState(formTemplate);
  const [showSucessMessage, setShowSuccessMessage] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);
  const [emailFailed, setEmailFailed] = useState(false);

  const form = useRef();
  const onFormChangeHandler = (eve) => {
    let field = eve.target.name;

    setFormData((prev) => ({ ...prev, [field]: eve.target.value }));
    setIsFormValid(true);
  };

  const onSendHandler = (e) => {
    e.preventDefault();
    setFormData(formTemplate);

    if ((formData.email && formData.name && formData.message) === "") {
      setIsFormValid(false);
    } else {
      emailjs
        .sendForm("service_b83u9hd", "template_yqt934m", form.current, {
          publicKey: "uygqNEgS6UlBHzZ_G",
        })
        .then(
          () => {
            console.log("email sent!");
            setShowSuccessMessage(true);
            setTimeout(() => {
              setShowSuccessMessage(false);
            }, 2000);
          },
          (error) => {
            setEmailFailed(true);

            setShowSuccessMessage(true);
            setTimeout(() => {
              setEmailFailed(false);
            }, 2000);

            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <div>
      {(showSucessMessage || emailFailed) && (
        <PortalComponent>
          <Backdrop
            open={true}
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, color: "#fff" }}
          >
            <div className="h-screen flex justify-center items-center">
              <Alert
                severity="success"
                sx={{
                  width: "max-content",
                  margin: "auto",
                  height: "4rem",
                  textAlign: "center",
                  fontSize: "22px",
                  fontWeight: 700,
                }}
              >
                {showSucessMessage &&
                  "Thank you for reaching out! I will get back to you soon. Have a great day ahead! 😌"}

                {emailFailed &&
                  " Sorry, something went wrong. Please try again later."}
              </Alert>
            </div>
          </Backdrop>
        </PortalComponent>
      )}

      <div className="grid md:grid-cols-2  items-between xs:justify-center md:justify-normal ">
        <div className=" flex flex-col items-center justify-between ">
          {/* part 1 */}
          <div className=" bg-primary-gray p-4 w-[60%] xs:mb-0 md:mb-0  xs:w-[80%] md:w-[60%]">
            <div className=" flex justify-start items-center ">
              <div className=" xs:h-14  xs:w-14  md:h-24 md:w-24 bg-primary-blue flex items-center justify-center">
                <MailOutlineIcon style={{ fontSize: "50px", color: "white" }} />
              </div>
              <div className="xs:p-3 md:p-8 ">
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
              <div className=" xs:h-14  xs:w-14  md:h-24 md:w-24 bg-primary-blue flex items-center justify-center">
                <WhatsAppIcon style={{ fontSize: "50px", color: "white" }} />
              </div>
              <div className="xs:p-3 p-8">
                <p className=" text-lg font-semibold text-primary-blue   ">
                  {" "}
                  WhatsApp
                </p>

                <Link href="https://wa.me/9366311783" rel="noopener noreferrer">
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
          <div>
            <form
              className="flex flex-col p-4 "
              ref={form}
              onSubmit={onSendHandler}
            >
              <input
                className="xs:h-7 md:h-10 mb-4 focus:outline-none p-4 "
                type="text"
                placeholder="Your Name"
                name="name"
                onChange={(eve) => onFormChangeHandler(eve)}
                value={formData.name}
              />

              <input
                className="xs:h-7 md:h-10 mb-4 focus:outline-none p-4 "
                type="email"
                placeholder="Your Email"
                name="email"
                onChange={(eve) => onFormChangeHandler(eve)}
                value={formData.email}
              />

              <textarea
                className="xs:1 md:mb-4 focus:outline-none p-4 "
                id="msg"
                rows="3"
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

              <input
                type="submit"
                value="Send"
                className="xs:h-7 md:-h-10 w-16 bg-primary-blue text-primary-yellow"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
