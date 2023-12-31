import { useState } from "react";
import { LightSpeed, Slide } from "react-reveal";
const InstructorCard = ({ instructor, setHeight }) => {
  const [isFollow, setIsFollow] = useState(false);

  return (
    <div
      className={`hover:scale-y-105 duration-500 transform gap-2 border-x-2 w-full flex items-center ${
        setHeight ? setHeight : "h-full"
      }`}
    >
      <div className="h-full w-full">
        <img className="h-full w-full" src={instructor?.image} alt="doctor" />
      </div>
      <div className="w-full space-y-3 text-end p-5 mb-5">
        <Slide left>
          <h1 className="font-bold text-xl uppercase">{instructor?.name}</h1>
        </Slide>
        <p className="secondary-text">{instructor?.email}</p>
        <p className="uppercase  text-xs">{instructor?.role}</p>
        <LightSpeed>
          <button
            onClick={() => setIsFollow(!isFollow)}
            className={`primary-btn ${isFollow ? "" : ""}`}
          >
            {isFollow ? "Unfollow" : "Follow"}
          </button>
        </LightSpeed>
      </div>
    </div>
  );
};

export default InstructorCard;
