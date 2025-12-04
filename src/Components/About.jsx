import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <>
      {/* --------------------- SECTION WRAPPER --------------------- */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16 text-[#111827] font-poppins">

        {/* --------------------- ABOUT HEADER --------------------- */}
        <h2 className="text-2xl font-semibold mb-2">About us</h2>
        <p className="text-sm text-gray-600 mb-10 w-[70%]">
          We not only help you design exceptional products, but also make it easy for you
          to share your designs with more like-minded people.
        </p>

        {/* --------------------- BLOCK 1 --------------------- */}
        <div className="grid grid-cols-2 gap-12 items-center mb-20">

          {/* Image Placeholder Box */}
          <div
            className="bg-gray-200 rounded-xl"
            style={{ width: "622px", height: "506px" }}
          >
            {/* user will insert <img> later */}
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-lg font-semibold">Provide fashionable and qualified products</h3>
            <p className="text-sm text-gray-600 mt-3 leading-6">
              Already millions of people are very satisfied by this page builder and the
              number is growing more and more. Technology developing, requirements are
              increasing. Riode has brought.
            </p>
          </div>
        </div>

        {/* --------------------- BLOCK 2 --------------------- */}
        <div className="grid grid-cols-2 gap-12 items-center mb-20">

          {/* Text Content */}
          <div>
            <h3 className="text-lg font-semibold">Provide fashionable and qualified products</h3>
            <p className="text-sm text-gray-600 mt-3 leading-6">
              Already millions of people are very satisfied by this page builder and the
              number is growing more and more. Technology developing, requirements are
              increasing. Riode has brought.
            </p>
          </div>

          {/* Image Placeholder Box */}
          <div
            className="bg-gray-200 rounded-xl"
            style={{ width: "622px", height: "506px" }}
          ></div>
        </div>

        {/* --------------------- CONTACT AREA --------------------- */}
        <div className="grid grid-cols-2 gap-16 mt-12">

          {/* LEFT CONTACT DETAILS */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in touch with us</h3>

            <div className="mb-6">
              <h4 className="font-medium">Address</h4>
              <p className="text-sm text-gray-600">
                Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter
              </p>
            </div>

            <div className="mb-6">
              <h4 className="font-medium">Email</h4>
              <p className="text-sm text-gray-600">nexton@example.com</p>
            </div>

            <div className="mb-6">
              <h4 className="font-medium">Phone</h4>
              <p className="text-sm text-gray-600">000-123-456-7890</p>
            </div>

     
          </div>

        </div>
      </section>
    </>
  );
};

export default About;
