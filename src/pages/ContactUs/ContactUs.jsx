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
        <div className={`default-container py-12 px-4 `}>
          <div className="text-center">
            <h1 className="text-3xl font-semibold  mb-4">Contact Us</h1>
            <p className="">
              We're here to assist you. Please fill out the form below to get in
              touch with us or use the contact information provided.
            </p>
          </div>
          <div
            className={`mt-12 max-w-2xl mx-auto p-6 rounded-lg shadow-lg ${
              isDarkMode ? "" : "bg-green-900"
            }`}
          >
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-semibold  mb-4">
                Contact Information
              </h2>
              <p className="">
                If you have urgent inquiries or prefer to reach us directly, you
                can use the following contact information:
              </p>
              <ul className="mt-4 ">
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
            <form onSubmit={handleSubmit}>
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
