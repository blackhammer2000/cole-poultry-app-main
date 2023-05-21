import React, { useState } from "react";
import { AiOutlineLinkedin, AiOutlineFacebook } from "react-icons/ai";
import "./css/Footer.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email === "") {
      // Show error toast notification
      toast.error("Email is required!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      // Perform your subscription logic here

      // Show success toast notification
      toast.success("Successfully subscribed!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Reset the email input field
      setEmail("");
    }
  };

  return (
    <footer className="footer bg-black text-white h-auto ">
      <ToastContainer />
      <div className="container  d-flex flex-column justify-content-start align-items-center h-auto py-2">
        <div className="row justify-content-center align-items-center w-100 ">
          {/* <div className="col-md-4 col-sm-12">
            <img src={logo} alt="Logo" className="footer-logo" />
          </div> */}
          <div className="col-md-4 col-sm-12">
            <p className="">Subscribe to our newsletter:</p>
            <form onSubmit={handleSubscribe}>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="btn btn-danger">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          {/* <div className="col-md-4 col-sm-12"></div> */}
        </div>
        <div className="row ">
          <div className="col-12">
            <ul className="social-icons d-flex justify-content-center">
              <li>
                <a href="https://www.linkedin.com/company/epoultry/">
                  <AiOutlineLinkedin />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100088593704349&mibextid=ZbWKwL">
                  <AiOutlineFacebook />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="text-center font-weight-bold">
              &copy; 2023 All rights reserved: <span className="big-e">e</span>
              <span className="bold">-POULTRY</span> | Page designed by{" "}
              <a
                href="https://olivebishop.vercel.app/"
                style={{ textDecoration: "none", color: "red" }}
              >
                TRUE GRAPHICS 💕
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
