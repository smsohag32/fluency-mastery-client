import React, { useContext } from "react";
import { toast } from "react-toastify";
import { ThemeContext } from "../../Context/ThemeProvider";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message send success");
  };

  return (
    <div>
      <Helmet>
        <title>Contact | Fluency</title>
      </Helmet>
      <div
        className={`pt-16 ${
          isDarkMode ? "bg-base-100 text-gray-700" : "bg-black text-white"
        } `}
      >

<div className="text-center bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-700 py-12 text-white">
            <h1 className="text-[2rem] font-semibold  mb-4">Contact Us</h1>
            <p className="text-[1.5rem] max-w-xl text-center mx-auto">
              We're here to assist you. Please fill out the form below to get in
              touch with us or use the contact information provided.
            </p>
          </div>

        <div className={`default-container py-12 px-4 `}>
          <div
            className={`mt-12 flex flex-col lg:flex-row gap-6  w-full p-6 rounded-lg  ${
              isDarkMode ? "" : "bg-green-900"
            }`}
          >
            <div className=" w-full shadow-lg p-4">
              <h2 className="text-[2rem] font-semibold  mb-4">
                Contact Information
              </h2>
              <p className="text-lg">
                If you have urgent inquiries or prefer to reach us directly, you
                can use the following contact information:
              </p>
              <ul className="mt-4 text-lg">
                <li className="mb-2">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:contact@fluencymastery.com">
                    contact@fluencymastery.com
                  </a>
                </li>
                <li className="mb-2">
                  <strong>Phone:</strong> +1 (123) 456-7890
                </li>
                <li className="mb-2">
                  <strong>Hotline:</strong> +1 (800) 555-1234
                </li>
              </ul>
            </div>
            <form className="w-full p-4 shadow-lg" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block  mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full  bg-gray-50 text-black px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block  mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-50 text-black px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block  mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full bg-gray-50 text-black px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
