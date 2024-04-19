import React from "react";
import bg from "../../../../assets/bg/tech.png";
import { Link } from "react-router-dom";
const OfferBoard = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to top, rgba(15, 24, 25, 1), #000000b8), url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className="w-full min-h-[60vh] flex items-center justify-center backdrop-blur-lg bg-opacity-75"
    >
      <div className="default-container flex items-center flex-col justify-center h-full text-center">
        <div>
          <h2 className="text-2xl text-white md:text-[3rem] mb-4 font-extrabold max-w-xl leading-10">
            Achieve Fluency in Any <p className="mt-4">Language</p>
          </h2>
          <p className="mb-4 text-white text-[1.5rem]">
            Unlock Your Language Learning Potential
          </p>
         <div className="mt-10">
         <Link
            to="/courses"
            className="primary-btn  text-white "
          >
            Enroll Now
          </Link>
         </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBoard;
