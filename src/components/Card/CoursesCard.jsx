import { Fade, Flip, Zoom } from "react-reveal";
const CoursesCard = ({
  courseInfo,
  cardLoading,
  handleCart,
  isAdmin,
  isInstructor,
}) => {
  return (
    <div className="shadow-xl rounded-xl w-full text-black border-b-2 bg-gray-100 border-gray-300 group duration-1000 overflow-hidden">
      <div className="card w-full h-full">
        <div className="relative min-h-[40%]  object-contain overflow-hidden bg-cover bg-no-repeat">
          <Zoom>
            <img
              src={courseInfo?.course_image}
              className="min-w-full object-cover h-60 transition duration-300 ease-in group-hover:scale-x-110"
            ></img>
          </Zoom>
          {courseInfo?.available_seats == 0 && (
            <div className="badge font-bold leading-relaxed badge-warning absolute top-0 right-0">
              <span>Seats Full</span>
            </div>
          )}
        </div>
        <div className="card-body">
          <Flip right>
            <h2 className=" text-[1.5rem] leading-6 font-semibold">
              {courseInfo?.course_name}
            </h2>
          </Flip>
          <p className="mb-2 text-sm">
            Instructor: {courseInfo?.instructor_name}
          </p>
          <div className="">
            <h1 className="text-[1.5rem] text-gray-800 font-semibold">
              Course Fee: <span className="text-orange-400"> $ {courseInfo?.price}</span>
            </h1>
          </div>
          <div className="flex items-center absolute top-0 left-0 bg-black px-4 py-3 justify-between">
          <p className="bg-black ">
              <span className=" text-white mr-3 font-bold">
                Available Seats:
              </span>
             <span className="text-gray-100"> {courseInfo?.available_seats}</span>
            </p>
          </div>
          <div className="w-full mt-6 flex justify-end">
            <button
              onClick={() => handleCart(courseInfo)}
              className=" w-full primary-btn text-white uppercase"
              disabled={
                isInstructor ||
                isAdmin ||
                courseInfo?.available_seats == 0 ||
                cardLoading
              }
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
