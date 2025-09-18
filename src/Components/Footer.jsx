import React from "react";
import logo from "../assets/Images/logo.png";
import { Link } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section id="footer" className="mt-25">
        <div className="container">
          <div
            className="footer-menu-row mt-[60px] flex justify-between mb-15
  "
          >
            <div className="logo-part">
              <Link className="w-[119px]  " to={"/"}>
                <img className="mb-5" src={logo} alt="logo" />
              </Link>

              <a className="flex gap-2 items-center mb-3 " href="#">
                <FaFacebook className="text-[#4676ED] text-xl" />
                <p className="text-xs font-normal font-poppins text-primery ">
                  Facebook
                </p>
              </a>

              <a className="flex gap-2 items-center mb-3 " href="#">
                <FaYoutube className="text-[#DA0000] text-xl" />
                <p className="text-xs font-normal font-poppins text-primery ">
                  Youtube
                </p>
              </a>

              <a className="flex gap-2 items-center mb-3 " href="#">
                <BsTelegram className="text-[#4676ED] text-xl" />
                <p className="text-xs font-normal font-poppins text-primery ">
                  Telegram
                </p>
              </a>

              <a className="flex gap-2 items-center mb-3 " href="#">
                <FaFacebook className="text-[#4676ED] text-xl" />
                <p className="text-xs font-normal font-poppins text-primery ">
                  FaTwitterSquare
                </p>
              </a>
            </div>

            {/* -------------Getting started---------- */}

            <div className="Getting-started flex flex-col">
              <h2 className="text-xl font-medium font-poppins text-primery mb-5">
                Getting started
              </h2>
              <a
                className="text-base font-normal  font-poppins text-primery mb-4"
                href="#"
              >
                Release Notes
              </a>
              <a
                className="text-base font-normal font-poppins text-primery mb-4"
                href="#"
              >
                Upgrade Guide
              </a>
              <a
                className="text-base font-normal font-poppins text-primery mb-4"
                href="#"
              >
                Browser Support
              </a>
              <a
                className="text-base font-normal font-poppins text-primery mb-4"
                href="#"
              >
                Dark Mode
              </a>
            </div>

            {/* -------------Explore ---------- */}

            <div className="Getting-started flex flex-col">
              <h2 className="text-xl font-medium font-poppins text-primery mb-5">
                Explore
              </h2>
              <a
                className="text-base font-normal  font-poppins text-primery mb-4"
                href="#"
              >
                Prototyping
              </a>
              <a
                className="text-base font-normal font-poppins text-primery mb-4"
                href="#"
              >
                Design systems
              </a>
              <a
                className="text-base font-normal font-poppins text-primery mb-4"
                href="#"
              >
                Pricing
              </a>
              <a
                className="text-base font-normal font-poppins text-primery mb-4"
                href="#"
              >
                Security
              </a>
            </div>

            {/* -------------Community ---------- */}

            <div className="Getting-started flex flex-col">
              <h2 className="text-xl font-medium font-poppins text-primery mb-5">
                Community
              </h2>
              <a
                className="text-base font-normal  font-poppins text-primery mb-4"
                href="#"
              >
                Discussion Forums
              </a>
              <a
                className="text-base font-normal font-poppins text-primery mb-4"
                href="#"
              >
                Code of Conduct
              </a>
              <a
                className="text-base font-normal font-poppins text-primery mb-4"
                href="#"
              >
                Contributing
              </a>
              <a
                className="text-base font-normal font-poppins text-primery mb-4"
                href="#"
              >
                API Reference
              </a>
            </div>
          </div>
         
        </div>
      </section>
    </>
  );
};

export default Footer;
