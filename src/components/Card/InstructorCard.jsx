import { useState } from "react";
import { LightSpeed, Slide } from "react-reveal";
const InstructorCard = ({ instructor, setHeight }) => {
  const [isFollow, setIsFollow] = useState(false);

  return (
    <div
      className={`hover:scale-y-105 h-full  bg-white text-black relative shadow-md primary-shadow flex-col rounded-xl duration-500 transform gap-2 border-x-2 w-full flex items-center ${
        setHeight ? setHeight : "h-full"
      }`}
    >
      <div className="h-full w-full flex items-center justify-center">
        <img className="h-full object-cover w-32 rounded-full" src={instructor?.image} alt="doctor" />
      </div>
      <div className="w-full space-y-3 text-center p-5 mb-5">
        <Slide top>
          <h1 className="font-bold text-xl uppercase">{instructor?.name}</h1>
        </Slide>
        <p className="secondary-text">{instructor?.email}</p>
        <p className="uppercase  text-xs">{instructor?.role}</p>
        <LightSpeed>
          <button
            onClick={() => setIsFollow(!isFollow)}
            className={` ${isFollow ? "bg-orange-400 px-6 py-1.5 rounded-[2rem] text-white" : "bg-blue-400 px-6 py-1.5 rounded-[2rem] text-white"}`}
          >
            {isFollow ? "Unfollow" : "Follow"}
          </button>
        </LightSpeed>
      </div>

      {isFollow ? <span className="absolute top-3 bg-green-600 text-white py-[2px] text-sm px-2 rounded-full  right-2">Following</span> : null}
    </div>
  );
};

export default InstructorCard;
