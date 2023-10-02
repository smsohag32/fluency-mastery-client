import React from "react";
import bg from "../../../../assets/bg/tech.png";
import { Link } from "react-router-dom";
const OfferBoard = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to top, rgba(15, 24, 25, 0.72), #000000b8), url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className="w-full h-[50vh]"
    >
      <div className="default-container flex items-center flex-col justify-center h-full text-center">
        <div>
          <h2 className="text-2xl text-white md:text-3xl font-semibold">
            Achieve Fluency in Any Language
          </h2>
          <p className="mb-4 text-white">
            Unlock Your Language Learning Potential
          </p>
          <Link
            to="/courses"
            className="primary-btn py-2 text-white px-5 uppercase"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OfferBoard;
